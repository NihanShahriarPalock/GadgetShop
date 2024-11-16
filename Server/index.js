const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lggq9by.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const dbConnect = async () => {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};
dbConnect();

// API
app.get("/", (req, res) => {
    res.send("Server is running");
});


//jwt
app.post('/authentication', async (req, res) => {
    const userEmail = req.body
    const token = jwt.sign(userEmail, process.env.ACCESS_KEY_TOKEN, { expiresIn: '10d' })
    res.send({token})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
