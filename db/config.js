
const mongoose = require('mongoose')
const mongoAtlasUri = "mongodb+srv://admin:a12345678@cluster0.ppt3iqy.mongodb.net/E-dashboard?retryWrites=true&w=majority"

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}
//Uncomment below to check if connection is established
// const dbConnection = mongoose.connection;
// dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
// dbConnection.once("open", () => console.log("Connected to DB!"));