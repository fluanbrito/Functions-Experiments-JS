// paradigma orientado à objetos
class ProxyFactory {

    static createProxy(object) {
        return new Proxy(object, {
            get(target, property, receiver) {
                console.log(`A propriedade "${property}" foi lida.`);
                return target[property];
            }
        });
    }
}

let person = { name: 'Luan Ferreira' };
// não precisou criar a instância
person = ProxyFactory.createProxy(person);
console.log(person.name); // exibe também a mensagem do proxy