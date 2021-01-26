class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in.');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out.');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
}

//'return this' allows for method chaining

let userOne = new User('yoshi@mario.com', 'Yoshi');
let userTwo = new User('ryu@ninjas.com', 'Ryu');
let adminOne = new Admin('klinton.jp@gmail.com', 'Klinton');

let users = [userOne, userTwo, adminOne];

adminOne.deleteUser(userOne);

console.log(users);