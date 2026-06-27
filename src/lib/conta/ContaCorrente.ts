import Conta from "./Conta.js";

export default class ContaCorrente extends Conta {
  public deposito(conta: Conta, total: number): void {
    // regra especifica para ContaCorrente

    this.emailProvider?.send({
      html: "",
      subject: "Um novo deposito para você",
      to: conta.getNome(),
      text: `A conta ${this.conta} de ${this.getNome()} te enviou R$ ${total}`,
    });
  }
}
