import express from 'express';
import { home } from './home.js';
import { submit } from './authentication.js';
import path from 'path';

const app = express();

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

// ======================================================
// this are used to call Html files directly

const absolutePath = path.resolve('./ExpressJs');
app.use(express.urlencoded({ extended: true })); // to get the form data in req.body

app.get('/', checkAgeMiddleware, (req, resp) => {
    resp.sendFile(absolutePath + '/home.html');
});
app.get('/about', (req, resp) => {
    resp.sendFile(absolutePath + '/about.html');
});
app.get('/contact', (req, resp) => {
    resp.sendFile(absolutePath + '/contact.html');
});
app.get('/login', (req, resp) => {
    resp.sendFile(absolutePath + '/login.html');
})
// here i have called the function from authentication.js when user submit the login form
app.post('/submit', (req, resp) => {
    // submit(req,resp);
    resp.render('dashboard', { username: req.body.username, password: req.body.password });
});

app.get('/register', (req, resp) => {
    resp.sendFile(absolutePath + '/register.html');
})

// 404 page for invalid routes
app.use((req, resp) => {
    resp.status(404).sendFile(absolutePath + '/404.html');
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