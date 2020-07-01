const {Router} = require('express');
const app = require('../server');
const router = Router();
const {
    renderAddTeam,
    addTeam,
    deleteTeam,
    getTeamsList
        
} = require('../controllers/add-team.controller');

//router.get('/agregar-equipos', (req, res) =>{
//    res.send('agregar equipos')
//})

router.get('/agregar', renderAddTeam);
router.post('/agregar-equipo', addTeam)

router.get('/eliminar-equipo', getTeamsList);
router.delete('/eliminar-equipo/:id', deleteTeam);

module.exports = router;