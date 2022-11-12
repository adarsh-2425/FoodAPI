const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database')
const cors = require('cors');
const bodyParser = require('body-parser');

// Connect to Database
mongoose.connect(config.database);


// On Connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to Database');
});
// On Error
mongoose.connection.on('error',(err)=>{
    console.log('Database error:' +err);
});

const app = express();

const foods = require('./routes/foods');
const reservation = require('./routes/reservations')

// CORS Middleware
app.use(cors());

app.use(bodyParser.json());

app.use('/foods', foods);
app.use('/reservation',reservation);

// Start Server
app.listen(process.env.PORT || 3000, function(){
    console.log("server listening on port %d in %s mode", this.address().port, app.settings.env);
});