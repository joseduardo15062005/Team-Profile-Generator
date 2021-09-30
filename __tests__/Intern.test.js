const Intern = require("../lib/Intern");

test("School is a String", () => {
  const intern = new Intern("jose", 1, "jose@gmail.com", "Bootcamp");

  expect(intern.school).toBe(intern.school);
});

test("getSchool() return  intern School", () => {
  const intern = new Intern("jose", 1, "jose@gmail.com", "Bootcamp");

  expect(intern.getSchool()).toBe(intern.school);
});

test("getRole() return  intern Object", () => {
  const intern = new Intern("jose", 1, "jose@gmail.com", "Bootcamp");

  expect(intern.getRole()).toBe(intern);
});
