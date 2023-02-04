const math = {
    add: function (x, y) {
        return x + y;
    }
};

console.log(math.add(5, 6));

const auth = {
    login() {
        console.log('Logged in');
    },
    logout() {
        console.log('logged out');
    }
};


auth.login()
