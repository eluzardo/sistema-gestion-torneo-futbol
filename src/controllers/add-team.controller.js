const Team = require("../models/Team");
const teamController = {};

teamController.renderAddTeam = (req, res) => {
  res.render("team/add-team");
};

teamController.addTeam = async (req, res) => {
  const name = req.body.name;
  const newTeam = new Team({ name });
  await newTeam.save();
  res.redirect('/agregar')
};

teamController.getTeamsList = async (req, res) => {
  const Teams = await Team.find().sort({ name: 1 }).lean();
  res.render("team/teams", { Teams });
  //console.log(Teams)
};

teamController.deleteTeam = async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.redirect("/eliminar-equipo");
};

module.exports = teamController;
