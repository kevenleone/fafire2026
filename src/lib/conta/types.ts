export default interface IConta {
  conta: string;
  saldo: number;
  transacoes: Array<any>;

  getCpf: () => string;
  getNome: () => string;
  getDataNascimento: () => string;

  setNome: (nome: string) => void;
  setDataNascimento: (dataNascimento: Date) => void;
  setCpf: (cpf: string) => void;
}

class Conta implements IConta {
  conta: string;
  saldo: number;
  transacoes: any[];
  getCpf: () => string;
  getNome: () => string;
  getDataNascimento: () => string;
  setNome: (nome: string) => void;
  setDataNascimento: (dataNascimento: Date) => void;
  setCpf: (cpf: string) => void;
}
