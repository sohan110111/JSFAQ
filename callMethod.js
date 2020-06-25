const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName : 'Hero',
    lastName : 'Galam',
    salary : 25000
}

normalPerson.chargeBill.call(heroPerson, 500, 50, 20); // { firstName: 'Hero', lastName: 'Balam', salary: 25000 }
console.log(heroPerson.salary); // salary = amount - tips - tax = 24430

normalPerson.chargeBill.call(friendlyPerson, 1000, 100, 10); // { firstName: 'Hero', lastName: 'Galam', salary: 25000 }
console.log(friendlyPerson.salary); // 23890

// now use apply method
normalPerson.chargeBill.apply(heroPerson, [3000, 500, 100]); // { firstName: 'Hero', lastName: 'Balam', salary: 24430 }
console.log(heroPerson.salary); // 20830

normalPerson.chargeBill.apply(friendlyPerson, [2000, 200, 50]); // { firstName: 'Hero', lastName: 'Galam', salary: 23890 }
console.log(friendlyPerson.salary); // 21640