const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Room = require('../models/roomSchema.js')

router.createRoom = function(req, res){
    let room = new Room({
        roomType: req.body.roomType,
        floor: req.body.floor,
        capacity: req.body.capacity,
        price: req.body.price
    })
    room.save(function(err, savedRoom){
        if(err)
            res.status(400).json(err)
        else if(!savedRoom)
            res.status(202).json("Room not created")
        else
            res.status(201).json(savedRoom)
    })
}

//fetch rooms of a hotel with their bookings
router.fetchRoom = function(req, res){
  /*  console.log(req.params.type);

Room.findOne({roomType:req.params.type,status:0}).exec(function(err, userData){
    if(err)
        res.status(400).json(err+"error")
    else
        res.status(200).json(userData)
})*/
    Room.aggregate([
        { $lookup:{
            from: 'bookings',
            localField: '_id',
            foreignField: 'room_id',
            as: 'bookingData'
        }},
        { $project: {
            'roomType':1, 'floor':1, 'capacity':1, 'price':1,
            'bookingData.start_date':1, 'bookingData.end_date':1, 'bookingData.status':1
        }}
    ]).exec(function(err, roomData){
        if(err)
            res.status(400).json(err)
        else if(!roomData)
            res.status(202).json("no data found")
        else
            res.status(200).json(roomData)
    })
}

module.exports = router
