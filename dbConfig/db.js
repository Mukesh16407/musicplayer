const mongoose = require('mongoose');

module.exports = async()=>{
    const connectionParams ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    try{
      await mongoose.connect(process.env.MONGO_URL,connectionParams);
      console.log("Connected to DB")
    }catch(err){
      console.log("could not connect toDB")
    }
}