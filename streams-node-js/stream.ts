import { randomUUID } from "crypto";
import { Readable, Transform, TransformCallback, Writable } from "stream";
import { appendFile, createWriteStream, WriteStream } from "fs";
import path from "path";

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

class SetHeaderCsv extends Transform {
  counter: number = 0;
  _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback): void {
    if (this.counter > 0) {
      callback(null, chunk);
      return;
    }

    this.counter += 1;
    callback(null, "id,name\n".concat(chunk));
  }
}

class WritableStream extends Writable {
  private _path: string;
  private _stream: WriteStream;
  constructor(path: string) {
    super();
    this._path = path;
    this._stream = createWriteStream(this._path, "utf8");
  }
  _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null | undefined) => void): void {
    console.log(chunk.toString());
    this._stream.write(chunk, encoding, err => {
      if (err) {
        this.emit("error", err);
      }
    });

    callback();
  }
}

new ReadableStream()
  .pipe(
    new TransformStream() // Transform stream Faz a transformação dos dados
  )
  .pipe(
    new SetHeaderCsv() // Define o header do arquivo csv
  )
  .pipe(
    new WritableStream("meu.csv") // Writable stream escreve os dados gerados no arquivo "meu.csv"
  );
