const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Allow both localhost and your Vercel frontend
const allowedOrigins = [
  'http://localhost:3000',
  'https://food-delivery-app-git-main-mohd-faaishals-projects.vercel.app'
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin like Postman
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Parse JSON
app.use(express.json());

// Connect to DB
const connectdb = require('./db');
connectdb();

// Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

// Test route
app.get('/', (req, res) => {
  res.send("Hello Faishal");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
