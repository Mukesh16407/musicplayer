const express = require('express');
require('express-async-errors');

require('dotenv').config();
const dbConfig = require("./dbConfig/db");

const userRoutes = require('./routes/userRoute');
const songsRoute = require('./routes/songsRoute');


const app = express();

app.use(express.json());

const port =process.env.PORT || 5000;







app.use('/api/users',userRoutes);
app.use("/api/songs", songsRoute);

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})