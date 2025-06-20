const express = require('express')
const router = express.Router();
const User = require('../model/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const secretKey="i'mMohdFaishalLearningthisProject";

router.post("/createuser", [
    body('email').isEmail(),
    body('name', 'Invalid Name').isLength({ min: 5 }),
    body('password', 'Password must be conatin min 6 later').isLength({ min: 5 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    const salt=await bcrypt.genSalt(10)
    const secPassword=await bcrypt.hash(req.body.password,salt)
    try {

        await User.create({
            name: req.body.name,
            email: req.body.email,
            password:secPassword,
            location: req.body.location
        })
        res.json({ success: true })

    } catch (error) {
        console.log(error);
        res.json({ success: false })
    }
});

//login 


router.post("/loginuser", [
    body('email').isEmail(),
    body('password', 'Password must be conatin min 6 later').isLength({ min: 5 })
], async (req, res) => {
    const email = req.body.email;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    try {
        const userData = await User.findOne({ email });
        if (!userData) {

            return res.status(400).json({ error: "Invalid Credential" });

        }
        const pwdCompare= await bcrypt.compare(req.body.password, userData.password)
        if ( !pwdCompare) {

            return res.status(400).json({ error: "Invalid Password" });

        }

        const data={
            user:{
                id:userData.id
            }
        }

        const authToken= jwt.sign(data,secretKey)


        return res.json({ success: true ,authToken:authToken});

    } catch (error) {
        console.log(error);
    }
})







module.exports = router;




