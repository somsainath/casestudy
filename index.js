const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
const routes = require('./routes/route');
const { Mongoose } = require('mongoose');
app.use(routes);

const dbURI = 'mongodb+srv://somsainath:test123@cluster0.rpgz5.mongodb.net/test1';
mongoose.connect(dbURI,{ useNewUrlParser: true , useUnifiedTopology:true, useCreateIndex: true})
.then((result)=>app.listen(8010,function(){
    console.log('listening to port 8010'+result);
}))