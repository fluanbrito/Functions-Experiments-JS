// paradigma orientado à objetos
class ProxyFactory {
    
    createProxy(object) {
        return new Proxy(object, {
            get(target, property, receiver) {
                console.log(`A propriedade "${property}" foi lida.`);
                return target[property];
            }
        });
    }
}

let person = { name: 'Luan Ferreira' };
// cria um instância do ProxyFactory
const factory = new ProxyFactory();
// cria o proxy
person = factory.createProxy(person);
console.log(person.name); // exibe também a mensagem do proxy
