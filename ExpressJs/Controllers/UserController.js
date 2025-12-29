import Users from "../Models/Users.js";

// export function userslist(req,resp){
//     const userdata = users();
//     const isLoggedIn = false;
//     resp.render('userslist',{users: userdata, isLoggedIn});
// }

// export function userEdit(req,resp){
//     let user = users().find((u)=>u.id == req.params.id);
//     resp.render('editUser',{user: user});
// }

export async function userslist(req, resp) {
    try {
        const userdata = await Users.findAll(); // fetch users from database
        const isLoggedIn = false;
        resp.render('userslist', { users: userdata, isLoggedIn });
    } catch (err) {
        console.error(err);
        resp.status(500).send('Server error');
    }
}

export async function userEdit(req, resp) {
    try {
        let id = req.params.id;
        const user = await Users.findOne({where:{id}}); // find by primary key
        if (!user) return resp.status(404).send('User not found');
        resp.render('editUser', { user });
    } catch (err) {
        console.error(err);
        resp.status(500).send('Server error');
    }
}