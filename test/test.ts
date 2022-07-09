import {describe, it } from "mocha";
import Serial from "../src/serial";
import { strict as assert } from "assert";

describe("Serial.number()", () => {
  it("returns 0 length array if parameter is nothing", () => {
    assert.equal(Serial.number().length, 0);
  });

  it("returns array that has length as parameter provided", () => {
    const len = 12;
    assert.equal(Serial.number(len).length, len);
  });

  it("returns array that starts with second parameter", () => {
    const start = 2, len = 10;
    assert.equal(Serial.number(len, start)[0], start);
  });
});

describe("Serial.char.lower()", () => {
  it("returns 0 length array if parameter is nothing", () => {
    assert.equal(Serial.char.lower().length, 0);
  });

  it("returns array that has length as parameter provided", () => {
    const len = 12;
    assert.equal(Serial.char.lower(len).length, len);
  });

  it("returns array that starts with second parameter", () => {
    const start = 2, len = 10;
    assert.equal(
      Serial.char.lower(len, start)[0],
      String.fromCharCode(("a").charCodeAt(0) + start)
    );
  });
});

describe("Serial.char.upper()", () => {
  it("returns 0 length array if parameter is nothing", () => {
    assert.equal(Serial.char.upper().length, 0);
  });

  it("returns array that has length as parameter provided", () => {
    const len = 12;
    assert.equal(Serial.char.upper(len).length, len);
  });

  it("returns array that starts with second parameter", () => {
    const start = 2, len = 10;
    assert.equal(
      Serial.char.upper(len, start)[0],
      String.fromCharCode(("A").charCodeAt(0) + start)
    );
  });
});
