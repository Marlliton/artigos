// @ts-ignore
import { Stack } from "./stack/index.ts";

class CheckBalancedParentheses {
  private _stack: Stack;
  private _openingBrackets: string[];
  private _closingBrackets: string[];

  constructor(private _expression: string) {
    this._stack = new Stack();
    this._openingBrackets = ["(", "[", "{"];
    this._closingBrackets = [")", "]", "}"];
  }

  exec() {
    for (const char of this._expression) {
      if (this._openingBrackets.includes(char)) {
        this._stack.push(char);
      } else if (this._closingBrackets.includes(char)) {
        const indexCloseBracket = this._closingBrackets.indexOf(char);

        if (
          this._stack.isEmpty() ||
          this._stack.pop() !== this._openingBrackets[indexCloseBracket]
        ) {
          return false;
        }
      }
    }

    return this._stack.isEmpty();
  }
}

const result = new CheckBalancedParentheses("((2 * 3) + 4)");
console.log(`A expressão ${result.exec() ? "está balanceada" : "não está balanceada"}`);
