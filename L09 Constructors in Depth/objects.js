
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in.');
        this.online = true;
    }
}

let userOne = new User('yoshi@mario.com', 'Yoshi');
let userTwo = new User('ryu@ninjas.com', 'Ryu');

console.log(userOne);
userTwo.login();
console.log(userTwo);