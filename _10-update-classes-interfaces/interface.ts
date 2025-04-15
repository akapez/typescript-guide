interface Authenticate {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

class SystemUser implements Authenticate {
  constructor(public email: string, public password: string) {}

  login() {}

  logout() {}
}

let user: Authenticate;

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
