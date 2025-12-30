import Users from '../Models/Users.js';
import bcrypt from 'bcrypt';

export function login(req, resp) {
    resp.render('login');
}

export async function submit(req, resp) {

    const loginData = req.body;
    const user = await Users.findOne({ where: { email: loginData.email } });
    if (!user) {
        return resp.status(401).send('Invalid credentials');
    }

    // compare password using bcrypt
    const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
    if (!isPasswordValid) {
        return resp.status(401).send('Invalid credentials');
    }

    // Set user session
    req.session.user = {
        id: user.id,
        username: user.username,
        useremail: user.email
    };
    resp.redirect('/profile');
}

export function register(req, resp) {
    resp.render('register');
}

export default async function registerUser(req, resp) {
    try {
        const userData = req.body;
        userData.password = await bcrypt.hash(userData.password, 10); // hash password
        await Users.create(userData); // create new user in database
        resp.redirect('/users-list');
    } catch (err) {
        console.error(err);
        resp.status(500).send('Server error');
    }
}