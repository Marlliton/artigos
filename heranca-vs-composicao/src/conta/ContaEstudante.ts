import Conta from "./Conta";

export default class ContaJovem extends Conta {
  renderDinheiro(): number {
      throw "Conta estudante não pode render dinheiro";
  }
}