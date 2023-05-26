export class Stack {
  constructor(private _items: Array<any> = []) {}

  push(item: any) {
    this._items.push(item)
  }

  pop() {
    return this._items.pop()
  }

  peek() {
    return this._items[this._items.length - 1]
  }

  isEmpty() {
    return this._items.length === 0
  }

  size() {
    return this._items.length
  }
}