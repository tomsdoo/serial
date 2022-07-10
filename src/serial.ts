/*!
 * @license serial
 * (c) 2019 tom
 * License: MIT
*/

class Chars {
  protected start_char : string;
  constructor(provided_start_char : string){
    this.start_char = provided_start_char;
  }
  public getRange(length? : number, start ?: number){
    const lc : number = this.start_char.charCodeAt(0);
    return Serial.number(length, start).map(function(i:number){
      return String.fromCharCode((i % 26) + lc);
    });
  }
}
export class Serial {
  constructor(){}
  public static number(length?: number, start ?: number){
    let r : number[] = [];
    let ls : number = start ? start : 0;
    const localLength = length || 0;
    for(let i = 0; i < localLength; i++){
      r.push(i + ls);
    }
    return r;
  }
  public static char = {
    lower(length?: number, start ?: number){
      return (new Chars("a")).getRange(length, start);
    },
    upper(length?: number, start ?: number){
      return (new Chars("A")).getRange(length, start);
    }
  };
}

export default Serial;
