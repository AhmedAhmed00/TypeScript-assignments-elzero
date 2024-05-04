//Q1

// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  getName: () => string;
  state: boolean;
}

// Do Not Edit The Code Below
let user: Member = {
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

// =================================================

// Q2

// Create Interface Here
interface Client {
  id: number;
  username: string;
  active: boolean;
  discount: number;
  getPrice: (p: number) => number;
}

// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  },
};

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// =================================================

// Q3

// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}

interface Superman extends Man, Bird {
  bodyType: string;
  origin: string;
}

let creature: Superman = {
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
  private userName: string;
  private type: string;
  private lvl: number | string;
  private isVip?: boolean;
  constructor(u: string, t: string, l: number | string, v?: boolean) {
    this.userName = u;
    this.type = t;
    this.lvl = l;
    this.isVip = v;
  }
  details = (): string => {
    let msg = `${this.userName}, type is ${this.type}, level is ${this.lvl} `;
    if (this.isVip) msg = `Vip ${msg}`;
    return msg;
  };
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
  constructor(
    public id: number,
    public username: string,
    protected title: string
  ) {}
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);

//=================================================

//Q6

class Show {
  constructor(private _title: string) {}
  get title(): string {
    return this._title;
  }
  set title(n: string) {
    this._title = n;
  }
}

let tester1 = new Show("Elzero");

console.log(tester1.title); // Property 'title' does not exist on type 'Show'
tester1.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester1.title); // Property 'title' does not exist on type 'Show'

//=================================================

//Q7

interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here

class Playeer implements Play {
  id: number;
  level: string | number;
  title: string;
  constructor(i: number, t: string, l: number | string) {
    this.id = i;
    this.level = l;
    this.title = t;
  }
  logIn(): void {
    console.log("logged in");
  }
  logOut(msg: string): void {
    console.log(`${msg} good bye`);
  }
}

let player = new Playeer(100, "Elzero", 95);

console.log(player.id); // 100
console.log(player.title); // "Elzero"
console.log(player.level); // 95
player.logIn(); // Logged In
player.logOut("Good Bye"); // Logged Out, Good Bye
