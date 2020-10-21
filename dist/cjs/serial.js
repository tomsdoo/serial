"use strict";
/*!
 * @license serial
 * (c) 2019 tom
 * License: MIT
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Chars {
    constructor(provided_start_char) {
        this.start_char = provided_start_char;
    }
    getRange(length, start) {
        const lc = this.start_char.charCodeAt(0);
        return Serial.number(length, start).map(function (i) {
            return String.fromCharCode((i % 26) + lc);
        });
    }
}
class Serial {
    constructor() { }
    static number(length, start) {
        let r = [];
        let ls = start ? start : 0;
        for (let i = 0; i < length; i++) {
            r.push(i + ls);
        }
        return r;
    }
}
exports.default = Serial;
Serial.char = {
    lower(length, start) {
        return (new Chars("a")).getRange(length, start);
    },
    upper(length, start) {
        return (new Chars("A")).getRange(length, start);
    }
};
