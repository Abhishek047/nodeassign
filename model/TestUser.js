const mongoose = require('mongoose');
const TestUserSchema = mongoose.Schema;

const User = new TestUserSchema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    url:{
        type: String,
        required:true,
    },
    cratedAt:{
        type: Date,
        default: Date.now,
    }
});

module.exports = Testuser = mongoose.model('TestUser', User);