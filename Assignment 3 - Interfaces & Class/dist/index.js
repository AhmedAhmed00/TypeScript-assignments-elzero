"use strict";
//Q1
// Do Not Edit The Code Below
let user = {
    // Property 'country' is missing in type
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        // 'getName' does not exist in type 'Member'
        return this.username;
    },
};
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
// Do Not Edit The Code Below
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    },
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton",
};
//=================================================
// Q4
// Create Class Here
class Player {
    constructor(u, t, l, v) {
        this.details = () => {
            let msg = `${this.userName}, type is ${this.type}, level is ${this.lvl} `;
            if (this.isVip)
                msg = `Vip ${msg}`;
            return msg;
        };
        this.userName = u;
        this.type = t;
        this.lvl = l;
        this.isVip = v;
    }
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
// =================================================
// Q5
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let tester = new Shorten(100, "Elzero", "Developer");
console.log(tester.id);
console.log(tester.username);
//=================================================
//Q6
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title() {
        return this._title;
    }
    set title(n) {
        this._title = n;
    }
}
let tester1 = new Show("Elzero");
console.log(tester1.title); // Property 'title' does not exist on type 'Show'
tester1.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester1.title); // Property 'title' does not exist on type 'Show'
// Create Your Class Here
class Playeer {
    constructor(i, t, l) {
        this.id = i;
        this.level = l;
        this.title = t;
    }
    logIn() {
        console.log("logged in");
    }
    logOut(msg) {
        console.log(`${msg} good bye`);
    }
}
let player = new Playeer(100, "Elzero", 95);
console.log(player.id); // 100
console.log(player.title); // "Elzero"
console.log(player.level); // 95
player.logIn(); // Logged In
player.logOut("Good Bye"); // Logged Out, Good Bye
