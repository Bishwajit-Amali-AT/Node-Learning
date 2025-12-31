# Video-to-Text Transcription Feature – Documentation Overview

This feature allows a user to upload a video (.mp4) and convert its audio content into text using OpenAI Whisper API.

---

## Workflow

1. User uploads a video  
2. Server saves the video  
3. Video is converted to MP3 using FFmpeg  
4. MP3 file is sent to OpenAI Whisper API  
5. Transcription result is displayed on the same page  

---

## Prerequisites

### 1. Node.js & npm

Download and install from: https://nodejs.org/

Verify installation:

```bash
node -v
npm -v
```

### 2. Visual Studio Code (Optional)

https://code.visualstudio.com/

### 3. FFmpeg (Windows)

Download from: https://www.gyan.dev/ffmpeg/builds/

Steps:
- Download `ffmpeg-release-full.7z`
- Extract using 7-Zip
- Copy `bin` path (example: `C:\ffmpeg\bin`)
- Add to **System Environment Variables → Path**

Verify:

```bash
ffmpeg -version
```

---

## Project Setup

### Initialize Project

```bash
mkdir video-transcription
cd video-transcription
npm init -y
```

### Install Dependencies

```bash
npm install express multer fluent-ffmpeg fs path dotenv openai
npm install --save-dev nodemon
```

---

## File Upload Setup (Multer)

```js
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname))
});

export const upload = multer({ storage });
```

Ensure `uploads/` directory exists.

---

## FFmpeg Setup

```js
import ffmpeg from 'fluent-ffmpeg';

ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe');

ffmpeg(inputPath)
  .toFormat('mp3')
  .audioCodec('libmp3lame')
  .audioChannels(1)
  .audioFrequency(16000)
  .save(outputPath);
```

---

## OpenAI Whisper API Setup

### Install SDK

```bash
npm install openai
```

### Environment File

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
```

### Initialize Client

```js
import OpenAI from 'openai';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
```

---

## Transcription Logic

```js
const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream(outputPath),
  model: 'whisper-1'
});

res.render('transcript', {
  transcription: transcription.text,
  error: null
});
```

---

## Frontend (EJS)

```ejs
<div class="result">
  <% if (transcription) { %>
    <h3>Transcription Result:</h3>
    <pre><%= transcription %></pre>
  <% } else if (error) { %>
    <p style="color:red"><%= error %></p>
  <% } else { %>
    <p>Converted text will appear here</p>
  <% } %>
</div>
```

### CSS

```css
.result pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  max-height: 400px;
  overflow-y: auto;
}
```

---

## Optional Enhancements

- Disable submit button while processing
- FFmpeg logging

```js
.on('start', cmd => console.log(cmd))
.on('end', () => console.log('Conversion complete'))
.on('error', err => console.error(err));
```

- Graceful API error handling

---

## Recommended Folder Structure

```text
project/
├─ uploads/
├─ audio/
├─ views/
│  └─ transcript.ejs
├─ controllers/
│  └─ transcriptController.js
├─ routes/
│  └─ index.js
├─ .env
├─ server.js
└─ package.json
```
