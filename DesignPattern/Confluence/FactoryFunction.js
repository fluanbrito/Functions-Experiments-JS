function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName() {
            return firstName + ' ' + lastName;
        },
    };
}

let person1 = createPerson('Luan', 'Ferreira');
let person2 = createPerson('Amanda', 'Nobre');

console.log(person1.getFullName());
console.log(person2.getFullName());

