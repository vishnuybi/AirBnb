const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

//connection with database
//const MONGO_URL = 'mongodb+srv://vishnu111:YOhBARq5Oo0Wg6tQ@cluster0.ec6zz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

main()
    .then(() => { console.log("connected to database") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj,owner:"66ab564cb92d0dd6a68f8442"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();