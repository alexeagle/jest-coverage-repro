const sayHello = require("./index.js");

test("it should work", () => {
  expect(sayHello()).toBe("hello world");
});
