let funcionario = {email: 'abc@abc.com'};

let Proxyfuncionario = new Proxy(funcionario, {
    get(target, prop, receiver) {
        console.log("Armadilha aqui");
        return Reflect.get(target, prop, reeceiver);
    }

});

console.log(Proxyfuncionario.email);

let funcionario = {email: 'abc@abc.com'};
let funcionarioProxy = new Proxy(funcionario,  {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        return target[prop];
    }

});
console.log(funcionarioProxy.email);