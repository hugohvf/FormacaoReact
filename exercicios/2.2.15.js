class Funcionario {

    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}

let p = new Proxy(new Funcionario('abc@abc.com'), {
    get(target, prop, receiver) {
        console.log("Armadilha aqui");
        console.log(prop);
        console.log(target[prop]);
        console.log(target);
        console.log(receiver);
        return Reflect.get(target, prop, receiver);
    }
});

console.log(p.email);