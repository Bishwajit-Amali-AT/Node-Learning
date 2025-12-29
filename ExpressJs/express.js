import express from 'express';
// import { submit } from './authentication.js';
import path from 'path';

import { userEdit, userslist } from './Controllers/UserController.js';
import { login, submit, register } from './Controllers/AuthenticationController.js';
import { home } from './Controllers/HomeController.js';
import { aboutUs } from './Controllers/AboutController.js';
import { contactus } from './Controllers/ContactUsController.js';

import sequelize from './config/database.js';
const app = express();

// Database Connection Test
sequelize.authenticate()
    .then(() => console.log('MySQL connected successfully'))
    .catch(err => console.error('Unable to connect:', err));

// Create tables based on models
sequelize.sync({ alter: true })
    .then(() => console.log('Tables created or updated'))
    .catch(err => console.error(err));

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
const absolutePath = path.resolve('./ExpressJs');

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
app.get('/users-list', userslist);
app.get('/users/:id/edit', userEdit)

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