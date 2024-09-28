const express=require('express')
const { userLogin } = require('../controller/userController')
const router=express.Router()

router.get('/',(req,res,next)=>{

    res.send('reached at user router')
})

router.post('/login',userLogin)

//Another method to login router

// router.get('/login',(req,res,next)=>{

//     res.send('reached at user login')
// })
 module.exports=router