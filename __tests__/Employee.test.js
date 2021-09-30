const Employee = require("../lib/Employee");

test("name is a string and is not empty", () => {
  const employee = new Employee("Jose", 1);

  expect(employee.name).toBe("Jose");
});

test("id is a number diferent than 0", () => {
  const employee = new Employee("Jose", 1);

  expect(employee.id).toBeGreaterThanOrEqual(1);
});

test("email is a valid email", () => {
  const employee = new Employee("Jose", 1, "joseduardo15062005@gmail.com");
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  expect(employee.email).toMatch(emailRegex);
});

test("Method getName() return the Employee Name", () => {
  const employee = new Employee("Jose", 1);

  expect(employee.getName()).toBe(employee.name);
});

test("Method getId() return the Employee Id", () => {
  const employee = new Employee("Jose", 1);

  expect(employee.getId()).toBe(1);
});

test("Method getEmail() return the Employee email", () => {
  const employee = new Employee("Jose", 1, "joseduardo15062005@gmail.com");

  expect(employee.getEmail()).toBe("joseduardo15062005@gmail.com");
});

test("Method getRole() return the Employee Object", () => {
  const employee = new Employee("Jose", 1, "joseduardo15062005@gmail.com");

  expect(employee.getRole()).toBe(employee);
});
