
// const mongoose = require('mongoose');
// // const URL = 'mongodb://localhost:27017/gofood'; // Ensure this is correct
// const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/gofood'; // Use environment variable or fallback to local

// async function connectdb() {
//     try {
//         const connection = await mongoose.connect(URL);
//         console.log("__ Connected Successfully to MongoDB __", process.env.MONGO_URL);

//         const db = connection.connection.db;
//         console.log("Connected to database:", db.databaseName);

//         // List all collections in the database
//         const collections = await db.listCollections().toArray();
//         const collectionNames = collections.map(col => col.name);
//         console.log("Collections in the database:", collectionNames);

//         // Check if 'fooditem' collection exists
//         if (collectionNames.includes('fooditem')) {
//             const fetch_data = db.collection('fooditem');
//             const data = await fetch_data.find({}).toArray();
//             // async function () {

//             if (collectionNames.includes('foodcategory')) {

//                 const foodCategory = db.collection('foodcategory');
//                 const catData = await foodCategory.find({}).toArray()



//                 // global.fooditem=data;

//                 // console.log(global.fooditem)

//                 global.foodCategory = catData;
//                 // console.log("Data fetched from 'fooditem':", global.foodCategory);




//             }
//             else {
//                 console.log("Collection 'foodcategory' not found.");

//             }
//             // })

//             global.fooditem = data;
//             // console.log("Data fetched from 'fooditem':", global.fooditem);
//         } else {
//             console.log("Collection 'fooditem' not found.");
//         }
//     } catch (err) {
//         console.error("Failed to connect or fetch data:", err);
//     }
// }

// module.exports = connectdb;


const mongoose = require('mongoose');
require('dotenv').config(); // make sure you load .env file

const URL = process.env.MONGO_URL; // not in quotes and correct key

async function connectdb() {
    try {
        const connection = await mongoose.connect(URL);
        console.log("__ Connected Successfully to MongoDB __");

        const db = connection.connection.db;
        console.log("Connected to database:", db.databaseName);

        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);
        console.log("Collections in the database:", collectionNames);

        if (collectionNames.includes('fooditem')) {
            const fetch_data = db.collection('fooditem');
            const data = await fetch_data.find({}).toArray();

            if (collectionNames.includes('foodcategory')) {
                const foodCategory = db.collection('foodcategory');
                const catData = await foodCategory.find({}).toArray();
                global.foodCategory = catData;
            } else {
                console.log("Collection 'foodcategory' not found.");
            }

            global.fooditem = data;
        } else {
            console.log("Collection 'fooditem' not found.");
        }
    } catch (err) {
        console.error("Failed to connect or fetch data:", err);
    }
}

module.exports = connectdb;

