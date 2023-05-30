// paradigma orientado à objetos
class ProxyFactory {
    // blidando o uso do operador new
    constructor() {
        throw new Error('Não é permitida a criação de instâncias desta classe');
    }

    static createProxy(object) {
        return new Proxy(object, {
            get(target, property, receiver) {
                console.log(`A propriedade "${property}" foi lida.`);
                return target[property];
            }
        });
    }
}

// vai resultar em um erro em tempo de execução
const factory = new ProxyFactory();