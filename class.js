class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 30000); //Person { firstName: 'Hero', lastName: 'Balam', salary: 30000 }
console.log(heroPerson);

const friendlyPerson = new Person('Hero', 'Kalam', 50000); //Person { firstName: 'Hero', lastName: 'Kalam', salary: 50000 }
console.log(friendlyPerson);

// before ES6
function Person1 (firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Grand', 'Pappa', 1200); //Person1 { firstName: 'Grand', lastName: 'Pappa', salary: 1200 }
console.log(oldPerson);