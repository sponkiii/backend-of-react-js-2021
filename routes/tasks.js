const router = require('express').Router();
const Task = require('../model/Task');


//to fetch data from db
router.get('/', async (req,res) => {
    //try catch to see if empty or not
    try{
        //to get all data from db since emtpy param is default
        const task = await Task.find()

        //returns the data by putting in another json
        res.status(200).json({ TASKS: task })
    } catch (error){
        //for no data on db
        res.status(400).json({ message: 'No task' })
    }

});


// to export this on other files
module.exports = router;