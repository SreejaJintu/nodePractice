const username='sreeja'

const password=1234

const userLogin=(req,res,next)=>{
    if(username==res.body.username){
        if(password==res.body.password){
            res.status(200).json({message:'login sucessful'})
        }
        else{
            res.status(403).json({message:'wrong credentials'})
        }
    }
    res.body
    res.status(200).json('login router')
}
const userSignup=(req,res,next)=>{
    res.status(200).json('login router')
}
module.exports={userLogin,userSignup}