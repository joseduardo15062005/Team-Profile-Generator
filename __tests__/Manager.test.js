const Manager = require("../lib/Manager");

test("the manager have a office number", () => {
  const manager = new Manager("Jose", 1, "jose@gmail.com", 1234);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getRole return the Manager Object", () => {
  const manager = new Manager("Jose", 1, "jo@gmail.com", 12034);

  expect(manager.getRole()).toBe(manager);
});
