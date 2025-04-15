"use strict";
let user;
user = {
    email: "sam@gmail.com",
    password: "@1234",
    login() {
        console.log(`Hello ${this.email}`);
    },
    logout() {
        console.log(`Logout ${this.email}`);
    },
};
user.login();
user.logout();
