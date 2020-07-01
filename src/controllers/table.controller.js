const Team = require('../models/Team');

const tableController = {};

tableController.renderIndex = (req,res) =>{
    //res.render('table', {User})
}

tableController.renderTable= async (req,res)=>{
    const Table = await Team.find().sort({points:-1, games:1, goalDif: -1}).lean();
    res.render('table', {Table})

}

module.exports = tableController;