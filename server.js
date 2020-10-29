const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
app.use(express.json());


const db = config.get('mongoURI');

mongoose.connect
( 
    db, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
)
.then(()=> console.log('Connected to MongoDB...'))
.catch(err => console.log(err));

app.use("/api/user", require('./api/userControl'));

//PRODUCTION RULES
if(process.env.NODE_ENV === 'production'){
    //SET STATIC FOLDER
    app.use(express.static('client/build'));

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname , 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));



