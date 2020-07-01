require('./database')
const app = require('./server')



app.listen(app.get('port'), () => console.log (`running on server: ${app.get('port')}`))