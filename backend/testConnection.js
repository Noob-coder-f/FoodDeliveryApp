const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/gofood'; // Adjust this URL if needed

async function testConnection() {
    try {
        const connection = await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const db = connection.connection.db;
        const collections = await db.listCollections().toArray();
        console.log("Collections:", collections);

        if (collections.find(c => c.name === 'fooditem')) {
            const data = await db.collection('fooditem').find({}).toArray();
            console.log("Data from 'fooditem':", data);
        } else {
            console.log("Collection 'fooditem' not found.");
        }
    } catch (err) {
        console.error("Failed to connect:", err);
    } finally {
        mongoose.connection.close();
    }
}

testConnection();
