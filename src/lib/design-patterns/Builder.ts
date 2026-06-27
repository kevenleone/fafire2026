class Pizza {
  constructor(
    public tamanho: string,
    public ingredientes: string[],
    public borda: string,
  ) {}
}

class PizzaBuilder {
  private ingredientes: string[] = [];
  private borda = "tradicional";
  private tamanho = "media";

  comTamanho(t: string) {
    this.tamanho = t;
    return this;
  }
  adicionar(i: string) {
    this.ingredientes.push(i);
    return this;
  }
  comBorda(b: string) {
    this.borda = b;
    return this;
  }

  construir() {
    return new Pizza(this.tamanho, this.ingredientes, this.borda);
  }
}

// Interface fluente: monta objetos complexos passo a passo
const pizza = new PizzaBuilder()
  .comTamanho("grande")
  .adicionar("mussarela")
  .adicionar("manjericão")
  .comBorda("catupiry")
  .construir();
