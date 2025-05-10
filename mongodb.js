const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
    mongoose.connection.on('connected',()=> console.log("Database Connected"));
    await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`)

    }catch(err){
        console.log(err);
    }
    
}

module.exports = connectDB;