const {Router} = require('express')
const router = Router();
const {addMatch, editMatch, renderMatchForm} = require ('../controllers/match.controller')

router.get('/agregar-partidos', renderMatchForm)
router.post('/partidos', addMatch)



router.put('/editar-partidos/:id', editMatch)

module.exports = router;