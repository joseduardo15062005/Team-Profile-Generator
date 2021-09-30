test("github is a string", () => {
  const engineer = new Engineer("Jose", 1, "jose@gmail.com");

  expect(engineer.github).toEqual(expect.any(string));
});

test("geGithub() is a string", () => {
  const engineer = new Engineer("Jose", 1, "jose@gmail.com");

  expect(engineer.getGithub()).toEqual(expect.any(string));
});

test("getRole() is an Engineer Object", () => {
  const engineer = new Engineer("Jose", 1, "jose@gmail.com");

  expect(engineer.getRole()).toBe(engineer);
});
