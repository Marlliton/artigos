import { randomUUID } from "crypto";
import { Readable, Transform, TransformCallback } from "stream";

class ReadableStream extends Readable {
  _read() {
    for (let i = 0; i < 1e4; i++) {
      // Gera aproximadamente 10 mil linhas de dados

      const person = { id: randomUUID(), name: `marlliton ${i}` };
      this.push(JSON.stringify(person));
    }
    this.push(null); // Informa para o Readable que os dados acabaram
  }
}

class TransformStream extends Transform {
  _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback): void {
    const data = JSON.parse(chunk);
    const csvFormatData = `${data.id}, ${data.name.toUpperCase()}\n`;

    callback(null, csvFormatData);
  }
}

new ReadableStream()
  .pipe(
    new TransformStream() // Transform stream Faz a transformação dos dados
  )
  .pipe(
    process.stdout // Writable stream mostra ou escreve os dados gerados no console
  );
