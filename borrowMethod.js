const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        console.log(this);
        this.salary = this.salary - amount;
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

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);

heroChargeBill(500);  // { firstName: 'Hero', lastName: 'Balam', salary: 25000 }
console.log(heroPerson.salary); //24500

normalPerson.chargeBill(3000);
console.log(normalPerson.salary); //12000