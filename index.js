const express = require('express');
require('express-async-errors');

require('dotenv').config();
const dbConfig = require("./dbConfig/db");

const userRoutes = require('./routes/userRoute');

// const songRoutes = require('./routes/songs');
// const artistListRoutes = require('./routes/artist')

const app = express();

app.use(express.json());

const port =process.env.PORT || 5000;







app.use('/api/users',userRoutes);
// app.use('/api/login',authRoutes);
// app.use('/api/song',songRoutes);
// app.use('/api/artists',artistListRoutes);


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})