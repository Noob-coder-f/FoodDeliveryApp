// const express= require('express');
// const app=express();
// const port=5000;


// const cors = require("cors");

// app.use(cors({
//   origin: ["http://localhost:3000", "https://food-delivery-app-git-main-mohd-faaishals-projects.vercel.app", "https://food-delivery-4gwp0y0au-mohd-faaishals-projects.vercel.app"],
//   credentials: true
// }));



// //connection bnnae ke liye connectdb function bnaye h db.js me
// const connectdb=require('./db');

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-allow-Origin","http://localhost:3000");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin,x-Requested-With,Content-Type, Accept"
//     );
//     next();

// })

// connectdb();



// app.use(express.json())
// app.use('/api',require("./Routes/CreateUser"));
// app.use('/api',require("./Routes/DisplayData"));
// app.use('/api',require("./Routes/OrderData"));


// app.get('/',(req,res)=>{
//     res.send("Hello Faishal")
// });

// app.listen(port ,()=>{
//     console.log(`Server is running on ${port}`)
// });




const express = require('express');
const app = express();
const port = 5000;

const cors = require("cors");

// New allowed origins list including your current frontend URL
const allowedOrigins = [
  "http://localhost:3000",
  "https://food-delivery-app-git-main-mohd-faaishals-projects.vercel.app",
  "https://food-delivery-4gwp0y0au-mohd-faaishals-projects.vercel.app",
  "https://food-delivery-7e99tm1oj-mohd-faaishals-projects.vercel.app"  // Added your live frontend URL here
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin like Postman or curl
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy does not allow access from origin ${origin}.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

// Old CORS headers block - commenting out because it conflicts with cors middleware
/*
app.use((req,res,next)=>{
    res.setHeader("Access-Control-allow-Origin","http://localhost:3000");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,x-Requested-With,Content-Type, Accept"
    );
    next();
});
*/

//connection bnnae ke liye connectdb function bnaye h db.js me
const connectdb = require('./db');

connectdb();

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.get('/', (req, res) => {
    res.send("Hello Faishal");
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
