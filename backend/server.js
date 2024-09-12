
const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors")

const app = express()

let corsOptions = {
    origin : ['http://localhost:5173'],
 }
 
app.use(cors(corsOptions))
const mongoDBURL = 'mongodb+srv://swayam:panda@123@testproject.hj8f1.mongodb.net/'

 
//connect to Database
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoDBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to Database');
    } catch (error) {
        console.error(error);
        
    }
};
connectToMongoDB();
app.get("/", (req,res)=>{
    return res.json({
        name:"Swayam"
    })
})
app.get("/my-course", (req,res)=>{
    return res.json({
        course1:"Python",
        course2:"JavaScript",
        course3:"Java",
    })
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
})