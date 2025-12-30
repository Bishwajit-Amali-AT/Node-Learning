import express from 'express';
// import { submit } from './authentication.js';

import { userDelete, userEdit, userslist, userUpdate, profile } from './Controllers/UserController.js';
import registerUser, { login, submit, register } from './Controllers/AuthenticationController.js';
import { home } from './Controllers/HomeController.js';
import { aboutUs } from './Controllers/AboutController.js';
import { contactus } from './Controllers/ContactUsController.js';
import sequelize from './config/database.js';
import { convertVideoToText, transcribeVideo } from './Controllers/TranscriptController.js';
import {isAuthenticated, setUser} from './Middlewares/authMiddleware.js';
import session from 'express-session';

// import multer to upload files
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const absolutePath = path.resolve('./ExpressJs');


// Database Connection Test
sequelize.authenticate()
    .then(() => console.log('MySQL connected successfully'))
    .catch(err => console.error('Unable to connect:', err));

// Create tables based on models
sequelize.sync()
    .then(() => console.log('Tables created or updated'))
    .catch(err => console.error(err));

// ======================================================
// session setup
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));
// ===================================================
app.use(setUser);


// setup multer for file uploads
// Define storage location and filename
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(absolutePath, 'uploads');

        // check if folder exists, if not create it
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, absolutePath + '/uploads/'); // make sure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // unique filename
    }
});

// Create upload middleware
export const upload = multer({ storage: storage });
// ======================================================


// this is used to call a function inside js files
// app.get('/',(req,resp)=>{
//     resp.send(home());
// });

// app.get('/login',(req,resp)=>{
//     resp.send(login());
// });

// app.post('/submit',(req,resp)=>{
//     resp.send(submit());
// });

// ======================================================
// using ejs template engine to render dynamic data in html files

app.set('view engine', 'ejs');
app.set('views', absolutePath + '/views'); // Now points to ExpressJs/views

// ======================================================
// this are used to call Html files directly
app.use(express.urlencoded({ extended: true })); // to get the form data in req.body

app.get('/', home);
app.get('/about', checkAgeMiddleware, aboutUs);
app.get('/contact', contactus);
app.get('/login', login);
app.post('/submit', submit);
app.get('/register', register)
app.post('/user/register', registerUser)
app.get('/users-list', isAuthenticated, userslist);
app.get('/users/:id/edit', userEdit);
app.post('/users/update', userUpdate);
app.post('/users/:id/delete', userDelete);
app.get('/profile', isAuthenticated, profile);


// Video transcription routes
app.get('/transcript-video-to-text', convertVideoToText);
app.post('/transcribe', upload.single('video'), transcribeVideo); //

// 404 page for invalid routes
app.use((req, resp) => {
    // resp.status(404).sendFile(absolutePath + '/404.html');
    resp.status(404).render('404');
});

// Middleware function to check age
function checkAgeMiddleware(req, resp, next) {
    if (!req.query.age || req.query.age < 18) {
        return resp.send("You are not allowed to access this page");
    }
    else {
        next();
    }
}
app.listen(3000);