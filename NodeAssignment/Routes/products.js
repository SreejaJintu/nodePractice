const express=require('express')
const router=express.Router()

router.get('/',(req,res,next)=>{

    res.send('reached at produts router')
})
router.get('/productlist',(req,res,next)=>{

    res.send('reached at product list')
})
 module.exports=router