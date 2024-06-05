const TaskModel = require('../models/TaskModel.js');

//to get the task
module.exports.getTasks = async( req,res) => {
    const tasks = await TaskModel.find();
    res.send(tasks);
};

//to save task
module.exports.saveTask = async( req,res) => {
  const {task} = req.body

  TaskModel.create({task})
    .then((data) => {
      console.log("Saved successfully");
      res.status(201).send(data);
    })
    .catch((err) => {
       console.log(err);
       res.send({error : err , msg: "something went wrong!"});
    })
};

// to update task 
module.exports.updateTask = async( req,res) => {
  const{ id }= req.params;
  const {task} = req.body;

  TaskModel.findByIdAndUpdate(id, {task})
  .then((data) => res.send("Updated Successfully!"))
  .catch((err) => {
     console.log(err);
     res.send({error : err , msg: "something went wrong!"});
  })
};

//to Delete task 
module.exports.deleteTask = async( req,res) => {
    const{ id }= req.params;
  
    TaskModel.findByIdAndDelete(id)
    .then((data) => res.send("Deleted Successfully!"))
    .catch((err) => {
       console.log(err);
       res.send({error : err , msg: "something went wrong!"});
    })
  };
  