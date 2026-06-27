// Interface que nosso sistema espera
interface MeioDePagamento {
  pagar(valorEmCentavos: number): void;
}

// Biblioteca externa, com API incompatível
class GatewayLegado {
  enviarValor(reais: number) {
    /* ... */
  }
}

// Adapter: traduz a interface esperada para a do gateway legado
class AdaptadorGatewayLegado implements MeioDePagamento {
  constructor(private gateway: GatewayLegado) {}

  pagar(valorEmCentavos: number) {
    const reais = valorEmCentavos / 100;
    this.gateway.enviarValor(reais);
  }
}

// O sistema usa a interface; o adapter cuida da incompatibilidade
const pagamento: MeioDePagamento = new AdaptadorGatewayLegado(
  new GatewayLegado(),
);

pagamento.pagar(2599); // R$ 25,99
