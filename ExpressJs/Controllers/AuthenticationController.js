export function login(req, resp) {
    resp.render('login');
}

export function submit(req, resp) {
    resp.render('dashboard', { username: req.body.username, password: req.body.password });
}

export function register(req, resp) {
    // resp.sendFile(absolutePath + '/register.html');
    resp.render('register');
}