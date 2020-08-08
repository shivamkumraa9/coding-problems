const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://user1:testing123@cluster0.bu5td.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true})
				.then(()=> console.log("DB Conneted"))
				.catch((err)=> console.log(err))


app.use('/api/auth',require('./routes/auth.js'));
app.use('/api/questions',require('./routes/questions.js'));
app.use('/api/subscriptions',require('./routes/subscription.js'));

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const PORT = process.env.PORT | 8000
app.listen(PORT,()=>console.log(`Listening at port ${PORT}`))