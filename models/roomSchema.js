var mongoose = require('mongoose')
var Schema = mongoose.Schema

var roomSchema = new Schema({
   // roomNum:{type:Number,index:true,unique: true},
    roomType: { type: String, required: true },
    floor: { type: String, required: true },
    capacity: { type: Number },
    status: { type: Number, default: 0 }, //0->available, 1->not available
    price: { type: Number }
}, {
    timestamps: true
})

//roomSchema.index({ "room_id": 1}, { "unique": true });

module.exports = mongoose.model('Room', roomSchema)















































































































/*const mongoose = require('mongoose');

//const { SchemaOptions } = require('Models');

const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    roomnum: {
      type: mongoose.Schema.Types.Number,
      require: true,
      unique:true
    },
    roomtype: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    numbeds: {
      type: mongoose.Schema.Types.Number,
      require: true
    },
    price: {
      type: mongoose.Schema.Types.Number,
      require: true
    },
    occupencies:
    {
      type: mongoose.Schema.Types.Number,
      require: true
    },
    available:
    {
      type: mongoose.Schema.Types.Boolean,
      require: true
    },
    startdate:{
      type: mongoose.Schema.Types.Date,
    },
    enddate:{
      type: mongoose.Schema.Types.Date,
    },
  },
);

hotelSchema.index({ hotelName: 1, sparse: true }, { background: true });
module.exports = mongoose.model('Hotel', hotelSchema);*/







































/*const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;*/