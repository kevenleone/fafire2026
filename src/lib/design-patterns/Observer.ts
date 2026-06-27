interface Observador {
  atualizar(estoque: number): void;
}

class Produto {
  private observadores: Observador[] = [];
  constructor(private estoque: number) {}

  inscrever(o: Observador) {
    this.observadores.push(o);
  }

  repor(quantidade: number) {
    this.estoque += quantidade;
    // Notifica todos os interessados sobre a mudança
    this.observadores.forEach((o) => o.atualizar(this.estoque));
  }
}

class PainelDeAlerta implements Observador {
  constructor(private name: string) {}
  atualizar(estoque: number) {
    console.log(`Estoque atualizado: ${estoque} unidades`, this.name);
  }
}

const produto = new Produto(0);
produto.inscrever(new PainelDeAlerta("Keven"));
produto.inscrever(new PainelDeAlerta("Joao"));
produto.repor(50); // dispara a notificação
