const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { PORT, mongodbURL } = require('./config');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const addSubRoute = require('./routes/addSubRoute');

app.use(cors())
app.use(express.json())

// Connection of mongodb
try {
    const connection = mongoose.connect(mongodbURL, {useNewUrlParser: true});
    if (connection){
        console.log("MongoDB is connected");
    }
} catch (error) {
    console.log("MongoDB not connected: ",error);
}

//Handling different routes
// Use the route files
app.use('/api/register',registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/admin', addSubRoute);

app.get('/hello', (req, res)=>{
    res.send("Hello World")
})


app.listen(PORT, (req, res)=>{
    console.log("Server started on port", PORT);
})