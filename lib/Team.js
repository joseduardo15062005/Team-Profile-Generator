const inquirer = require("inquirer");
const { v4: uuidv4 } = require("uuid");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Team {
  constructor() {
    this.manager;
    this.engineers = [];
    this.interns = [];
  }

  addManager() {
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "What is  the Team Manager Name?",
        },
        {
          type: "text",
          name: "email",
          message: "What is  the  Manager Email?",
        },
        {
          type: "text",
          name: "officeNumber",
          message: "What is  the  Manager Office Number?",
        },
      ])

      .then(({ name, email, officeNumber }) => {
        const id = uuidv4();
        this.manager = new Manager(name, id, email, officeNumber);
        return this.askAddMember();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addEngineer() {
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "What is  the Engineer Name?",
        },
        {
          type: "text",
          name: "email",
          message: "What is  the  Engineer Email?",
        },
        {
          type: "text",
          name: "github",
          message: "What is  the  Engineer github?",
        },
      ])

      .then(({ name, email, github }) => {
        const id = uuidv4();
        const engineer = new Engineer(name, id, email, github);
        this.engineers.push(engineer);
        return this.askAddMember();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addIntern() {
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "What is  the Intern Name?",
        },
        {
          type: "text",
          name: "email",
          message: "What is  the  Intern Email?",
        },
        {
          type: "text",
          name: "school",
          message: "What is  the  Intern School?",
        },
      ])

      .then(({ name, email, school }) => {
        const id = uuidv4();
        const intern = new Intern(name, id, email, school);
        this.interns.push(intern);
        return this.askAddMember();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  askAddMember() {
    inquirer
      .prompt({
        type: "list",
        name: "type",
        message: "Add a member to the Team?",
        choices: ["Engineer", "Intern", "Finish building my team"],
      })

      .then(({ type }) => {
        if (type === "Engineer") return this.addEngineer();
        if (type === "Intern") return this.addIntern();

        return this.generateTeamPage();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  generateTeamPage() {
    console.log(this);
    return;
  }
}

module.exports = Team;
