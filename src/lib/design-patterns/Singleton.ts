class Configuracao {
  private static instancia: Configuracao;
  private valores = new Map<string, string>();

  // Construtor privado: ninguém cria com `new` de fora
  private constructor() {}

  static obter(): Configuracao {
    if (!Configuracao.instancia) {
      Configuracao.instancia = new Configuracao();
    }

    return Configuracao.instancia;
  }

  definir(chave: string, valor: string) {
    this.valores.set(chave, valor);
  }

  ler(chave: string) {
    return this.valores.get(chave);
  }
}

// Sempre a MESMA instância em todo o sistema\

const instance = Configuracao.obter();

instance.definir("tema", "escuro");
console.log(instance.ler("tema")); // 'escuro'
