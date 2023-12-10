const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://axxatagrawal:XjlW8XggzZ7jUfBi@cluster0.wir5xrk.mongodb.net"

const connectToMongo = async()=>{
    await mongoose.connect(
        mongoURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
      );
      console.log("Mongoose Connected sucessfully")
}

module.exports = connectToMongo;