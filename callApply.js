const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

console.log(normalPerson);
console.log(normalPerson.firstName);

normalPerson.chargeBill(500); 
console.log(normalPerson.salary); //14500

normalPerson.chargeBill(3000);
console.log(normalPerson.salary); //11500