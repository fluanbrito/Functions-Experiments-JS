// paradigma funcional
const createProxy = object => new Proxy(object, {
    get(target, property, receiver) {
        console.log(`A propriedade "${property}" foi lida.`);
        return target[property];
    }
});

let person = { name: 'Luan Ferreira' };
person = createProxy(person);
console.log(person.name);