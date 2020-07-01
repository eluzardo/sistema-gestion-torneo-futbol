const Match = require("../models/Match");
const Team = require("../models/Team");
const { findOne, findByIdAndUpdate } = require("../models/Match");

const matchController = {};

matchController.renderMatchForm = async (req,res)=>{
  const teamList= await Team.find().sort({name: 1}).lean();
  console.log(teamList)
  res.render('match/add-match', {teamList})
}

matchController.addMatch = async (req, res) => {
  let isLocal= true;
  let { localTeam, awayTeam, localScore, awayScore } = req.body;
  localScore = parseInt(localScore)
  awayScore = parseInt(awayScore)
  const newMatch = new Match({ localTeam, awayTeam, localScore, awayScore });
  await newMatch.save();
  const local = {
    localTeam,
    awayTeam,
    localScore,
    awayScore,
    isLocal
  }
  const away = {
    localTeam,
    awayTeam,
    localScore,
    awayScore,
    isLocal : false
  }
  updateTable(local);
  updateTable(away);
  res.redirect('/agregar-partidos');
};

matchController.editMatch = async (req,res) =>{
  const {localTeam, awayTeam, localScore, awayScore} = req.body 
  console.log(req.body)
  await Match.findByIdAndUpdate(req.params.id, {localTeam, awayTeam, localScore, awayScore});
  res.send('partido modificado')

}



async function updateTable(team){
  let equipo= '',
      aux=0;  
  let {localTeam, awayTeam, localScore, awayScore, isLocal} = team;
  
  if(isLocal){
    equipo= localTeam;
  } else{
    equipo= awayTeam;
    aux=localScore;
    localScore=awayScore;
    awayScore=aux;
  }
  const localTeamStats = await Team.findOne(
    { name: equipo },
    async (err, team) => {
      if (err) {
      }
      let {
        name,
        games,
        points,
        win,
        draw,
        lose,
        goalsFor,
        goalsAgainst,
        goalDif,
      } = team;
      games += 1;
      if (localScore > awayScore) {
        win += 1;
        points+=3
      } else if (localScore < awayScore) {
        lose += 1;
        //points+=1;
      } else {
        draw += 1;
        points+=1;
      }
      goalsFor += localScore;
      goalsAgainst -= awayScore;
      goalDif = goalsFor + goalsAgainst;
      await Team.findOneAndUpdate(
        { name },
        { games,points, win, draw, lose, goalsFor, goalsAgainst, goalDif }
      );
    }
  ); 

}
module.exports = matchController;
