const router = require('express').Router();
const Task = require('../model/Task');


// creating our empty router here
router.post('/addTask', async (req, res) => {

    const task = new Task({
        text: req.body.text,
        day: req.body.day,
        reminder: req.body.reminder,
    });

    try{
        // here we try to save task
        const savedTask = await task.save();
        res.send(savedTask);
    }catch(err){
        // incase we catch an err we respond with this
        res.status(400).send(err);
    }

});


// to export this on other files
module.exports = router;