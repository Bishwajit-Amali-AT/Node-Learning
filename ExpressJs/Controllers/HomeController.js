export function home(req, resp) {
    // resp.sendFile(absolutePath + '/home.html');
    resp.render('layout',{body : 'home'});
}