const express = require('express');
const app = express();
// Environment variables
require('dotenv').config();
// Logging any requests w/ colorized status codes
const logger = require("morgan");
// Connection to database
const connectToMongoDB = require("./db/mongodb");
// Prevent CORS issue
const cors = require('cors');

// Update corsOptions to have ALL origins given access
const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

/*
    Middleware
*/
app.use(logger("dev"));
app.use(cors(corsOptions));
// Read incoming requests property
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mcuRouter = require("./routes/mcuRouter");
// localhost:3001/api/.....
app.use("/api", mcuRouter);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);

    connectToMongoDB();
})