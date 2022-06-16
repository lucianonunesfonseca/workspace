class contaBancaria{
     
constructor(agencia, tipo, numero){
    this.agencia = agencia;
    this.tipo = tipo;
    this.numero = numero;
    this._saldo = 0;


}
     get saldo(){
        return this._saldo;
     }

     set saldo(valor){
        return this.saldo = valor;
     }

     sacar(valor){
        if(valor > this.saldo){
            return "Operação invalida";
        }
        this._saldo=  this._saldo - valor;

        return this._saldo;
     }
     depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
     }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }
    set cartaoCredito( valor){
        this.cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
        
    }
}

class contaUniverssitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universsitaria';
        
    }

    sacar(valor){
        if(valor > 500 || valor > saldo){
             return "Operação negada";
        }

        this._saldo = this._saldo - valor;
    }
}

