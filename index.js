const express = require('express');
const app = new express();
const cors = require('cors');
const dotenv = require('dotenv');
// import mongoose for db
const mongoose = require('mongoose')


//import routes
const authRoute = require('./routes/auth');
const tasksRoute = require('./routes/tasks');
const taskRoute = require('./routes/task');
const deleteRoute = require('./routes/delete');
const toggleRoute = require('./routes/toggle');

// for dotenv to work
dotenv.config();

// connect to db
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true  },
    () => console.log('connected to db!')
);

//using cors
app.use(cors());

// app.get('/products/:id', function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// Middlewear to send post requests
app.use(express.json());

// Route Middleweares
app.use('/api/tasks', authRoute, tasksRoute, taskRoute, deleteRoute, toggleRoute);



// now lets make a port
app.listen(3001, () => console.log('server up and running'));

