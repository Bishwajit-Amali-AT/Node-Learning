export async function isAuthenticated(req, resp, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        resp.redirect('/login');
    }
}

export async function setUser(req, res, next) {
    res.locals.user = req.session.user;
    res.locals.messages = req.flash();
    next();
}