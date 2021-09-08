const express = require('express')
const router = express.Router()
const Booking = require('../models/bookingSchema.js')
const Room = require('../models/roomSchema.js')

router.createBooking = function(req, res){
    let booking = new Booking({
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        purpose: req.body.purpose,
        room_id: req.body.room_id,
        user_id: req.body.user_id
    })
    booking.save(function(err, savedBooking){
        if(err)
            res.status(400).json(err)
        else if(!savedBooking)
            res.status(202).json("Reservation not created")
        else
            Room.updateOne(
                { "_id" : req.body.room_id },
                { status:1}
            ).exec(function(err, hotelData){
                if(err)
                      console.log(err)
                else
                    console.log(hotelData)
            })
            res.status(201).json(savedBooking)
    })
}

router.deleteBooking = function(req, res){
    var roomno=Booking.findById({_id:req.params.booking_id})

    //Booking.deleteOne({_id:req.params.booking_id});
    Booking.deleteOne({"_id":req.params.booking_id}).exec(function(err, userData){
        if(err)
            res.status(400).json(err+"error")
        else
   Room.updateOne(
        { "_id" : roomno.room_id },
        { status:0}
    ).exec(function(err, hotelData){
        if(err)
              console.log(err)
        else
            console.log(hotelData+"booking deleted");
            res.status(201).send("Booking Cancelled");
    })
})
    
}


/*router.fetchBooking = function(req, res){
    console.log(req.params.user_id)
    Booking.find({ user_id: req.params.user_id }).exec(function(err, roomData){
        if(err)
            res.status(400).json(err)
        else if(!roomData)
            res.status(202).json("no data found")
        else
            res.status(200).json(roomData)
    })
}*/

module.exports = router