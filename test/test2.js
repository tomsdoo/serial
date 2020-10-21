const serial = require("../dist/cjs/serial.js").default;
const assert = require("assert");

console.log("test for commonjs");

describe("number()", function(){
  it("returns 0 length array if parameter is nothing", function(){
    assert.equal(serial.number().length,0);
  });
  it("retruns array that has length as parameter provided", function(){
    const plen = 12;
    assert.equal(serial.number(plen).length, plen);
  });
  it("returns array that starts with second parameter", function(){
    const mystart = 2, mylen = 10;
    assert.equal(serial.number(mylen,mystart)[0], mystart);
  });
});

describe("char.lower()", function(){
  it("returns 0 length array if parameter is nothing", function(){
    assert.equal(serial.char.lower().length, 0);
  });
  it("retruns array that has length as parameter provided", function(){
    const plen = 12;
    assert.equal(serial.char.lower(plen).length, plen);
  });
  it("returns array that starts with alphabet indexed by second parameter", function(){
    const mystart = 2, mylen = 10;
    assert.equal(serial.char.lower(mylen,mystart)[0], String.fromCharCode(("a").charCodeAt(0)+mystart));
  });
});

describe("char.upper()", function(){
  it("returns 0 length array if parameter is nothing", function(){
    assert.equal(serial.char.upper().length, 0);
  });
  it("retruns array that has length as parameter provided", function(){
    const plen = 12;
    assert.equal(serial.char.upper(plen).length, plen);
  });
  it("returns array that starts with alphabet indexed by second parameter", function(){
    const mystart = 2, mylen = 10;
    assert.equal(serial.char.upper(mylen,mystart)[0], String.fromCharCode(("A").charCodeAt(0)+mystart));
  });
});
