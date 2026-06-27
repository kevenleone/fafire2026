interface Cafe {
  custo(): number;
  descricao(): string;
}

class CafeSimples implements Cafe {
  custo() {
    return 5;
  }
  descricao() {
    return "café";
  }
}

// Decorator: envolve um Cafe e adiciona comportamento
abstract class AdicionalCafe implements Cafe {
  constructor(protected base: Cafe) {}
  abstract custo(): number;
  abstract descricao(): string;
}

class ComLeite extends AdicionalCafe {
  custo() {
    return this.base.custo() + 2;
  }
  descricao() {
    return `${this.base.descricao()} + leite`;
  }
}

class ComChocolate extends AdicionalCafe {
  custo() {
    return this.base.custo() + 3;
  }
  descricao() {
    return `${this.base.descricao()} + chocolate`;
  }
}

// Empilha decoradores sem alterar a classe original
const pedido = new ComChocolate(new ComLeite(new CafeSimples()));
console.log(pedido.descricao(), pedido.custo()); // "café + leite + chocolate" 10
