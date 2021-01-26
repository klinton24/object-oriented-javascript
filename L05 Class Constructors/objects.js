class User {
    constructor(email, name){
        this.email = email;
        this. name = name;
    }
}

let userOne = new User('klinton.jp@gmail.com', 'Klinton');
let userTwo = new User('ryu@ninjas.com', 'Ryu');

console.log(userOne);
console.log(userTwo);


/*
'new' keyword - creates a new empty object {}.
Sets the value of 'this' to be the new empty object.
Calls the constructor method.
*/

