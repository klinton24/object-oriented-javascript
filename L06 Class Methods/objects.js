class User {
    constructor(email, name){
        this.email = email;
        this. name = name;
    }
    login(){
        console.log(this.email, 'just logged in.');
    }
    logout(){
        console.log(this.email, 'just logged out.');
    }
}

let userOne = new User('klinton.jp@gmail.com', 'Klinton');
let userTwo = new User('ryu@ninjas.com', 'Ryu');

userOne.login();
userTwo.logout();
