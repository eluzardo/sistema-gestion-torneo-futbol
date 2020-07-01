const {Router} = require('express');
const router = Router();


const {renderTable, renderIndex} = require('../controllers/table.controller')

router.get('/', renderTable);


module.exports = router
