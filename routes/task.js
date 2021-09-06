const router = require('express').Router();
const Task = require('../model/Task');


//to fetch data from db
router.get('/:_id', async (req,res) => {
    var id = req.params._id;

    //try catch to see if empty or not
    try{
        //to get all data from db with the specified id using findOne
        const task = await Task.findOne({_id: id});

        //returns the data by putting in another json
        res.status(200).json({ task: task })
    } catch (error){
        //for no data on db
        res.status(400).json({ message: 'No task' })
    }

});


// to export this on other files
module.exports = router;