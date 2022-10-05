/*!
 * @license serial
 * (c) 2019 tom
 * License: MIT
 */

class Chars {
  protected start_char: string;
  constructor(providedStartChar: string) {
    this.start_char = providedStartChar;
  }

  public getRange(length?: number, start?: number): string[] {
    const lc: number = this.start_char.charCodeAt(0);
    return Serial.number(length, start).map((i) =>
      String.fromCharCode((i % 26) + lc)
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Serial {
  public static number(length?: number, start?: number): number[] {
    const r: number[] = [];
    const ls: number = start ?? 0;
    const localLength = length ?? 0;
    for (let i = 0; i < localLength; i++) {
      r.push(i + ls);
    }
    return r;
  }

  public static char = {
    lower(length?: number, start?: number) {
      return new Chars("a").getRange(length, start);
    },
    upper(length?: number, start?: number) {
      return new Chars("A").getRange(length, start);
    },
  };
}

export default Serial;
