const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const UserModel=require("./Models/User");

const PORT = process.env.PORT || 4000; // Ensure this is a valid port number

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});



mongoose.connect("mongodb://localhost:27017/CRUD_MERN",{
    
}).then(()=>{
    console.log("Your connect with databases")

}).catch((err)=>{
    console.log(err);

});

app.post("/addUser",(request,responce)=>{
    
})



