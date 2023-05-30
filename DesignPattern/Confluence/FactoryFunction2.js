function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

var personActions = {
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

person1.getFullName = personActions.getFullName;
person2.getFullName = personActions.getFullName;

console.log(person1.getFullName());
console.log(person2.getFullName());