const router = require('express').Router();
const Task = require('../model/Task');


// creating our empty router here
router.put('/toggle/:_id', async (req, res) => {
    const id = req.params._id;
    const updatedTask = { 
        text: req.body.text,
        day: req.body.day,
        reminder: req.body.reminder,
    }

    Task.findByIdAndUpdate( 
            {_id: id}, 
            { $set: updatedTask },
            (docs, err) => {  
                if(!err){
                    console.log("Task updated: ", docs);
                } else {
                    console.log(err);
                }
            } 
        )

});


// to export this on other files
module.exports = router;