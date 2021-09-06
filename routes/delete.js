const router = require('express').Router();
const Task = require('../model/Task');


//to fetch data from db
router.delete('/delete/:_id', async (req,res) => {
    const id = req.params._id;

    Task.findByIdAndDelete( id, (err, docs) => {
        if (!err){
            console.log("Deleted : ", docs)
            res.status(200).send({ Deleted : docs })
        } else {
            console.log(err);
        }
    } )

    
});


// to export this on other files
module.exports = router;