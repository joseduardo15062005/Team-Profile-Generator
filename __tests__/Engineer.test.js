const Engineer = require("../lib/Engineer");

test("github is a string", () => {
  const engineer = new Engineer(
    "Jose",
    1,
    "jose@gmail.com",
    "joseduardo15062005"
  );
  expect(engineer.github).toBe(engineer.github);
});

test("getGithub() is a string", () => {
  const engineer = new Engineer(
    "Jose",
    1,
    "jose@gmail.com",
    "joseduardo15062005"
  );
  expect(engineer.getGithub()).toBe(engineer.github);
});

test("getRole() is an Engineer Object", () => {
  const engineer = new Engineer(
    "Jose",
    1,
    "jose@gmail.com",
    "joseduardo15062005"
  );
  expect(engineer.getRole()).toBe(engineer);
});
