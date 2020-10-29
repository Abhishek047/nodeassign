const express = require('express');
const router = express.Router();
const TestUser = require('../model/TestUser');



//PUBLIC GET REQUEST
router.get('/', async (req,res) => {
    try {
        const users = await TestUser.find();
        if(users.length === 0){
            return res.status(200).json({
                success: true,
                msg: 'Currently no user Found'
            })
        }
        else{
            return res.status(200).json({
                success: true,
                length: users.length,
                users
            })
        }
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg:'SERVER ERROR'
        })
    }
});



router.post('/', async (req,res) => {
    try {
        const newUser = new TestUser({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            url: req.body.url,
        });
        const result = await newUser.save();
        return res.status(200).json({
            success: true,
            result
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg:'SERVER ERROR'
        })
    }
})




module.exports = router;
