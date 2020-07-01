const mongoose = require ('mongoose');
require ('dotenv').config();

const {STATS_MONGODB_HOST, STATS_MONGODB_DATABASE}=process.env;
const MONGODB_URI =`mongodb://${STATS_MONGODB_HOST}/${STATS_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));  