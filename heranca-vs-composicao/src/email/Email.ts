export default class Email {
  constructor(private email: string) {
    if (!this.isValidEmail(email)) {
      throw new Error("Email inválido");
    }
  }

  get getEmail() {
    return this.email;
  }

  private isValidEmail(email: string): boolean {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email!)) {
      return false;
    }

    return true;
  }
}
