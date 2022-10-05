import { describe, it } from "mocha";
import serial_default from "../src/serial";
import { strict as assert } from "assert";

describe("default export", () => {
  it("Serial is also exported as default", () => {
    assert.equal(serial_default.number(10).length, 10);
  });
});
