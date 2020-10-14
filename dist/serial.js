/*!
 * @license serial
 * (c) 2019 tom
 * License: MIT
*/
var Chars = /** @class */ (function () {
    function Chars(provided_start_char) {
        this.start_char = provided_start_char;
    }
    Chars.prototype.getRange = function (length, start) {
        var lc = this.start_char.charCodeAt(0);
        return Serial.number(length, start).map(function (i) {
            return String.fromCharCode((i % 26) + lc);
        });
    };
    return Chars;
}());
var Serial = /** @class */ (function () {
    function Serial() {
    }
    Serial.number = function (length, start) {
        var r = [];
        var ls = start ? start : 0;
        for (var i = 0; i < length; i++) {
            r.push(i + ls);
        }
        return r;
    };
    Serial.char = {
        lower: function (length, start) {
            return (new Chars("a")).getRange(length, start);
        },
        upper: function (length, start) {
            return (new Chars("A")).getRange(length, start);
        }
    };
    return Serial;
}());
export default Serial;
