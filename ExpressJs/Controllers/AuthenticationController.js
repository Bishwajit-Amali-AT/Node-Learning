import Users from '../Models/Users.js';
import bcrypt from 'bcrypt';

export function login(req, resp) {
    resp.render('login');
}

export async function submit(req, resp) {

    const loginData = req.body;
    const user = await Users.findOne({ where: { email: loginData.email } });
    if (!user) {
        req.flash('error', 'Invalid Email')
        return resp.redirect('/login');
    }

    // compare password using bcrypt
    const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
    if (!isPasswordValid) {
        req.flash('error', 'Invalid Password')
        return resp.redirect('/login');
    }

    // Set user session
    req.session.user = {
        id: user.id,
        name: user.name,
        useremail: user.email
    };

    // Flash success message
    req.flash('success', 'You have successfully logged in!');
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

export async function logout(req, resp) {
    req.session.destroy((err) => {
        if (err) {
            return resp.status(500).send('Failed to log out');
        }
        // Redirect to the home page or login
        resp.redirect('/login');
    });
}