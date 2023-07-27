export class Queue {
  readonly _items: object
  private _count: number
  private _firstElement: number
  constructor(items: object = {}) {
    this._items = items
    this._count = 0
    this._firstElement = 0
  }

  enqueue(item: any) {
    this._items[this._count] = item
    this._count++
  }

  dequeue() {
    if(this.isEmpty()) return

    const result = this._firstElement[this._firstElement]
    delete this._items[this._firstElement]
    this._firstElement++
    return result
  }

  peek() {
    if(this.isEmpty()) return
    return this._items[this._firstElement]
  }

  isEmpty() {
    return this._count - this._firstElement === 0
  }

  size() {
    return this._count - this._firstElement
  }
}
