let userOne = {
    email: 'klinton@gmail.com',
    name: 'Klinton',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};
//Updating Properties
userOne.name = 'Klinton Smith';

//Must be a string
userOne['email'] = 'klinton.jp@gmail.com'

//create new properties
userOne.age = 25;

console.log(userOne)
