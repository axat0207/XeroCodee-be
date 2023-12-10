const mongoose = require('mongoose');


const connectToMongo = async()=>{
    await mongoose.connect(
        process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
      );
      console.log("Mongoose Connected sucessfully")
}

module.exports = connectToMongo;