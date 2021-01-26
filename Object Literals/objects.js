var userOne = {
    email: 'klinton.jp@gmail.com',
    name: 'Klinton',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

userOne.login();
