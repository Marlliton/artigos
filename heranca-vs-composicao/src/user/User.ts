import Email from "../email/Email";

export default class User {
  private _name: string;
  private _email: Email;
  constructor(name: string, email: Email) {
    this._email = email;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email.getEmail;
  }
}
