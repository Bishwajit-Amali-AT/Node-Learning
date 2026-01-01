import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';
import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: "ask this to Bhavik"
});

// set ffmpeg binary path ONCE
ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe');

export async function convertVideoToText(req, resp) {
    // this just renders the page
    resp.render('transcript', {
        transcription: null,
        error: null
    });
}

export async function transcribeVideo(req, resp) {
    try {
        if (!req.file) {
            return resp.status(400).send('No file uploaded');
        }

        const inputPath = req.file.path; // uploads/xxx.mp4

        // ensure audio directory exists
        const audioDir = 'ExpressJs/audio/';
        if (!fs.existsSync(audioDir)) {
            fs.mkdirSync(audioDir);
        }

        const outputFileName = `${Date.now()}.mp3`;
        const outputPath = path.join(audioDir, outputFileName);

        ffmpeg(inputPath)
            .toFormat('mp3')
            .audioCodec('libmp3lame')
            .audioChannels(1)
            .audioFrequency(16000)
            .on('start', cmd => {
                console.log('FFmpeg started:', cmd);
            })
            .on('end', async () => {
                console.log('MP3 created:', outputPath);
                try {
                    // Using OpenAI SDK
                    const transcription = await openai.audio.transcriptions.create({
                        file: fs.createReadStream(outputPath),
                        model: 'whisper-1'
                    });

                    resp.render('transcript', {
                        transcription: transcription.text,
                        error: null
                    });

                } catch (whisperError) {
                    console.error('Whisper error:', whisperError.response?.data || whisperError);
                    resp.status(500).send('Whisper transcription failed');
                }
            })
            .on('error', err => {
                console.error('FFmpeg error:', err);
                resp.status(500).send('Conversion failed');
            })
            .save(outputPath);

    } catch (err) {
        console.error(err);
        resp.status(500).send('Server error');
    }
}
