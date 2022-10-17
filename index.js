const express = require('express');
const cors = require('cors');
const Data = require('./Data')
const app = express();
const port = 4000 || process.env.PORT;

app.use(cors());

app.get('/',(req,res) =>{
    res.json(Data).status(200);;
    res.end();
})

app.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})