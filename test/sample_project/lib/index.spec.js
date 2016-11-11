const index = require("./index");
const assert = require("assert");

describe("index", () => {
  it("has a test", () => {
    assert(index(true) === 1);
  });

  it("has another test", () => {
    assert(index(false) === 0);
  });
});
