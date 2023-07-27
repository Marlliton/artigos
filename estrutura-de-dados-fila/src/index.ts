// @ts-ignore
import { Queue } from "./queue/index.ts";

const queue = new Queue()

queue.enqueue("joaozinho@zmail.com")
queue.enqueue("ana@zmail.com")
queue.enqueue("bia@zmail.com")
queue.enqueue("pedro@zmail.com")
console.log(queue._items)
queue.dequeue()
queue.dequeue()

console.log("Primeiro elemento da fila: ", queue.peek())
console.log("Tamanho da fila: ", queue.size())
