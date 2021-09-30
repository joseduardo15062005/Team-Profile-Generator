const Team = require("./lib/Team");

function init() {
  const team = new Team();

  team.addManager();
}

init();
