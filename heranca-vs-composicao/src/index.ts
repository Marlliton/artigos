import ContaEmpresarial from "./conta/ContaEmpresarial";
import ContaJovem from "./conta/ContaEstudante";
import Investir from "./investir/Investir";

const contaEmpresarial = new ContaEmpresarial();
contaEmpresarial.depositar(1000);
const contaEstudante = new ContaJovem();
contaEstudante.depositar(80);

const investir = new Investir();

investir.aplicarDinheiro([contaEmpresarial, contaEstudante]);

















// import Email from "./email/Email";
// import User from "./user/User";

// const marlliton = new User("Marlliton", new Email("marlliton.teste@gmail"))
// console.log(marlliton)
