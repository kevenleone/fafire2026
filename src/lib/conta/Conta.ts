import type EmailProvider from "../email/EmailProvider.js";

export default abstract class Conta {
  protected readonly conta = crypto.randomUUID();
  protected saldo = 0;
  protected transacoes = [];
  protected emailProvider?: EmailProvider;

  constructor(
    private cpf: string,
    private dataNascimento: Date,
    private nome: string,
  ) {}

  public setEmailProvider(emailProvider: EmailProvider) {
    this.emailProvider = emailProvider;
  }

  public getCpf() {
    return this.cpf;
  }

  public getNome() {
    return this.nome;
  }

  public getDataNascimento() {
    return this.dataNascimento;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }

  public setDataNascimento(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }

  public setCpf(cpf: string) {
    this.cpf = cpf;
  }

  public abstract deposito(conta: Conta, total: number): void;
}
