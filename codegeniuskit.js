
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    authenticate(username, password) {
        return this.username === username && this.password === password;
    }
}

// Example usage
const user = new User('Alice', '123456');
console.log(user.authenticate('Alice', '123456')); // true
console.log(user.authenticate('Bob', 'password')); // false
