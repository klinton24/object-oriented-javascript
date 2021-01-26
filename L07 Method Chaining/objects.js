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

//'return this' allows for method chaining

let userOne = new User('klinton.jp@gmail.com', 'Klinton');
let userTwo = new User('ryu@ninjas.com', 'Ryu');


userOne.login().updateScore().logout();