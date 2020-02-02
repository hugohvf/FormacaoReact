let funcionario = {email: 'abc@abc.com'};

let funcionarioProxy = new Proxy(funcionario,  {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        return `**${target[prop]}**`;
    }

});
console.log(funcionarioProxy.email);


funcionario = new Proxy({email: 'abc@abc.com'},  {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        return '**' + Reflect.get(target, prop, receiver) + '**' ;        
    }

});
console.log(funcionario.email);