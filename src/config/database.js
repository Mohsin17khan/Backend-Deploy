const mongoose = require("mongoose");

function connectToDB(){

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database Server is Running...")
    });
    
}

module.exports = connectToDB

