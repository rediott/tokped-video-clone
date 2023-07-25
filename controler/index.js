const express = require('express');
const app = express();


const mongoose = require('mongoose');
require('dotenv').config();


const mongoString = process.env.DATABASE_URL;
const bodyparser = require('body-parser');
mongoose.connect(mongoString);
const db = mongoose.connection;

const routes = require('./routes');
const bodyParser = require('body-parser');


db.on('error', (error) => {
    console.log(error)
})

db.once('connected', ()=>{
    console.log("DB Connected")
})

app.use(express.json());

app.use(bodyparser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use('/', routes);
app.use('/api', routes);

app.listen(process.env.PORT, ()=>{
    console.log("Running at " + process.env.PORT);
});

