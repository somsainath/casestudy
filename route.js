var express = require('express')
var router = express.Router()
var user = require('./user.js')
var room = require('./room.js')
var booking = require('./booking.js')

router.post('/create/user', user.createUser)
router.patch('/update/user', user.updateUser)
router.delete('/delete/user/:user_id', user.deleteUser)
router.get('/fetch/users', user.fetchUser)

router.post('/create/room', room.createRoom)
// router.put('/update/room', room.updateRoom)
router.get('/fetch/room', room.fetchRoom)
router.delete('/delete/room/:booking_id', booking.deleteBooking)
router.post('/book/room', booking.createBooking)

//router.get('/fetch/booking/:user_id', booking.fetchBooking)

module.exports = router

















































































/*
const express = require('express');
//const { updateMany, findByIdAndUpdate, findOneAndUpdate, findOne } = require('./models/user');
const router = express.Router();  
const Hotel = require("./models/rooms");
const User = require("./models/users");
router.get('/', function(req,res){
  Hotel.find().then((user1)=>
    {
      res.json(user1);
    })
})
router.post('/add/rooms',async function(req,res)
{
       const { roomnum,roomtype,numbeds,price,occupencies,available,startdate,enddate } = req.body;
       if (
        !roomtype||!numbeds||!price||!occupencies||!available
        
      ) {

        res.status(401).send('info insufficient');

        return;
      }
 try {

         const hotel = await Hotel.create({ roomnum,roomtype,numbeds,price,occupencies,available,startdate,enddate});
         res.status(201).json(hotel);
       }
       catch(err) {
         console.log(err);
         res.status(400).send('error, user not created');
       };
  })

  router.post('/add/user',async function(req,res)
{
       
 try {

         const user = await User.create({ name,email,mobile,dateOfBirth,gender,password});
         res.status(201).json(user);
 }
       catch(err) {
         console.log(err);
         res.status(400).send('error, user not created');
       };
  })
router.put('/', async function(req,res)
{
  try{
const n=5;
    for(var i=1;i<=n;i++){
      Hotel.findOne({roomnum:i}).then((user1)=>
    {
      if(user1.available)
      {
        
        console.log('nsdd');
      }
      
    })

    }
    res.send('done');
  }
    catch(err)
    {
      if(err)
      {
        res.send(err);
      }
    }
})
/*router.delete('/inventory/:id',function(req,res)
{
    res.send('delete req');
})
module.exports=router;*/