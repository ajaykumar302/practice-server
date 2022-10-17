const express = require('express');
const cors = require('cors');
const Data = require('./Data')
const app = express();
const port =  process.env.PORT||8080;

app.use(cors());

app.get('/',(req,res) =>{
    res.json(Data).status(200);;
    res.end();
})

app.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})