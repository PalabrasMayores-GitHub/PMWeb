const mongoose = require('mongoose');

async function ConnectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_KEY);
        console.log('Connected To Mongo DB');
    } catch(err) {
        console.log('failed to connect to mongo db, through this err: ', err);
    }
    return;
}

module.exports = {
    ConnectToMongo,
}