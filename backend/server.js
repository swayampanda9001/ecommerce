const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors")

const app = express()

let corsOptions = {
    origin: ['http://localhost:5173'],
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//connect to Database
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.mongodbURL);
        console.log('Connected to Database');
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
};

connectToMongoDB();

app.get("/", (req, res) => {
    return res.json({
        name: "Swayam"
    })
})
app.get("/my-course", (req, res) => {
    return res.json({
        course1: "Python",
        course2: "JavaScript",
        course3: "Java",
    })
})

app.post("/register-user", (req, res) => {
    try {
        let { email, password } = req.body
        console.log(email, password);
        return res.json({
            message: "Received successfully"
        })
    } catch (error) {
        return res.json({
            message: "Error Occured"
        })
    }
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})