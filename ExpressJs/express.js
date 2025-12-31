import express from 'express';
import { userDelete, userEdit, userslist, userUpdate, profile } from './Controllers/UserController.js';
import registerUser, { login, submit, register, logout } from './Controllers/AuthenticationController.js';
import { home } from './Controllers/HomeController.js';
import { aboutUs } from './Controllers/AboutController.js';
import { contactus } from './Controllers/ContactUsController.js';
import sequelize from './config/database.js';
import { convertVideoToText, transcribeVideo } from './Controllers/TranscriptController.js';
import { isAuthenticated, setUser } from './Middlewares/authMiddleware.js';
import session from 'express-session';
import flash from 'connect-flash';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const absolutePath = path.resolve('./ExpressJs');

// ======================================================
// Database Connection Setup
sequelize.authenticate()
    .then(() => console.log('MySQL connected successfully'))
    .catch(err => console.error('Unable to connect:', err));

// Create tables based on models
sequelize.sync()
    .then(() => console.log('Tables created or updated'))
    .catch(err => console.error(err));

// ======================================================
// Middleware Setup

// Session setup
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

// Flash messages middleware
app.use(flash());

// User session middleware to pass user info to views
app.use(setUser);

// Body parser for form data
app.use(express.urlencoded({ extended: true }));

// ======================================================
// File Upload Setup (Multer)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(absolutePath, 'uploads');

        // Check if folder exists, if not create it
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, absolutePath + '/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});
export const upload = multer({ storage: storage });

// ======================================================
// EJS Template Engine Setup
app.set('view engine', 'ejs');
app.set('views', absolutePath + '/views'); // Points to ExpressJs/views

// ======================================================
// Routes Setup

// Public Routes
app.get('/', home);
app.get('/about', checkAgeMiddleware, aboutUs);
app.get('/contact', contactus);
app.get('/login', login);

// Authentication Routes
app.post('/submit', submit);
app.get('/logout', logout);
app.get('/register', register);
app.post('/user/register', registerUser);

// User Routes (Protected)
app.get('/users-list', isAuthenticated, userslist);
app.get('/users/:id/edit', userEdit);
app.post('/users/update', userUpdate);
app.post('/users/:id/delete', userDelete);
app.get('/profile', isAuthenticated, profile);

// Video Transcription Routes
app.get('/transcript-video-to-text',isAuthenticated, convertVideoToText);
app.post('/transcribe', upload.single('video'), transcribeVideo);

// ======================================================
// 404 Error Handling for Invalid Routes
app.use((req, resp) => {
    resp.status(404).render('404');
});

// ======================================================
// Middleware Function to Check Age (Example)
function checkAgeMiddleware(req, resp, next) {
    if (!req.query.age || req.query.age < 18) {
        return resp.send("You are not allowed to access this page");
    } else {
        next();
    }
}

// ======================================================
// Start the Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
