function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    console.log(this.email, 'has logged in.');
    this.online = true;
}

User.prototype.logout = function(){
    console.log(this.email, 'has logged out.');
    this.online = false;
}

function Admin(...args){
    User.apply(this, args)
    this.role = 'Admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};


let userOne = new User('yoshi@mario.com', 'Yoshi');
let userTwo = new User('ryu@ninjas.com', 'Ryu');
let adminOne = new Admin('klinton.jp@gmail.com', 'Klinton');

let users = [userOne, userTwo, adminOne];

console.log(adminOne)