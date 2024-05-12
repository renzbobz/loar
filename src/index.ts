import { logUpdateStderr as logUpdate } from "log-update";
import pc from "picocolors";

interface Options {
  text?: string;
  symbol?: string;
  color?: string;
  interval?: number;
  width?: number;
}

export class Loar {
  text;
  color;
  symbol;
  width;
  interval;
  #id?: NodeJS.Timeout;

  constructor(opts: Options = {}) {
    this.text = opts.text;
    this.symbol = opts.symbol ?? "▬";
    this.color = opts.color ?? "cyan";
    this.width = opts.width ?? 20;
    this.interval = opts.interval ?? 10;
  }

  start() {
    const space = " ";
    const terminalWidth = process.stdout.columns;
    const { text, width, symbol, color, interval } = this;

    let index = 0;
    const fn = () => {
      let left = "";
      let leftSize = index - width;

      if (leftSize > 0) {
        left = space.repeat(leftSize);
      } else {
        leftSize = 0;
      }

      let rightSize = terminalWidth - index;

      if (rightSize < 1) {
        rightSize = 0;
      }

      const dots = symbol.repeat(terminalWidth - (leftSize + rightSize));

      index++;
      if (index > terminalWidth + width) index = 0;

      let content = "";
      if (text) content += text + "\n";
      content += (pc as { [key: string]: any })[color](left + dots);

      logUpdate(content);
    };

    this.#id = setInterval(fn, interval);
  }

  stop() {
    clearInterval(this.#id);
    logUpdate.clear();
  }
}

export default new Loar();
