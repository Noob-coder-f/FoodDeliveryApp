const express = require('express')
const router = express.Router();
const Order=require('../model/Orders');

router.post('/orderdata',async(req,res)=>{
    let data= req.body.order_data
    await data.splice(0,0,{order_date:req.body.order_date})

    let eId=await Order.findOne({'email':req.body.email})
    if(eId===null){
        try {

            await Order.create({
                email: req.body.email,
               order_data:[data]
            }).then(() => {
                res.json({ success: true })

            })
                
            
    
        } catch (error) {
            console.log(error.message);
            res.json("server Error")
        }
    }

    else{

        try {
            await Order.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:[data]}}).then(() => {
                
                    res.json({ success: true })
    
                })
            
            
        } catch (error) {
            
            res.json("server Error")

        }
    }


});


router.post('/myorderdata', async(req,res)=>{
    try {
        let myData= await Order.findOne({"email":req.body.email})
        res.json({orderdata:myData})
        
    } catch (error) {
        console.log(error.message);
        res.json("server Error")
        
    }

})

module.exports = router;
