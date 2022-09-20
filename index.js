const express = require('express');
require('express-async-errors');
const cors = require('cors')
require('dotenv').config();
const connect = require('./dbConfig/db.js');

const userRoutes = require('./routes/userRoute');

// const songRoutes = require('./routes/songs');
// const artistListRoutes = require('./routes/artist')

const app = express();

const port =process.env.PORT || 8080;



connect();
app.use(cors());
app.use(express.json());

app.use('/api/users',userRoutes);
// app.use('/api/login',authRoutes);
// app.use('/api/song',songRoutes);
// app.use('/api/artists',artistListRoutes);


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})