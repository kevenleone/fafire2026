interface EstrategiaDeFrete {
  calcular(pesoKg: number): number;
}

class FreteExpresso implements EstrategiaDeFrete {
  calcular(pesoKg: number) {
    return 20 + pesoKg * 4;
  }
}

class FreteEconomico implements EstrategiaDeFrete {
  calcular(pesoKg: number) {
    return 8 + pesoKg * 1.5;
  }
}

class CalculadoraDeFrete {
  constructor(private estrategia: EstrategiaDeFrete) {}

  calcular(pesoKg: number) {
    return this.estrategia.calcular(pesoKg);
  }
}

// Trocar o comportamento sem tocar na calculadora
console.log(new CalculadoraDeFrete(new FreteExpresso()).calcular(3));
console.log(new CalculadoraDeFrete(new FreteEconomico()).calcular(3));
