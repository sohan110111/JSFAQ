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

normalPerson.chargeBill();
console.log(normalPerson.chargeBill.bind(heroPerson));

// normalPerson.chargeBill(500); 
// console.log(normalPerson.salary); //14500

// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary); //11500