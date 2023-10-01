const db = require("../models");
const config = require("../config/auth.config");
const Task = db.task;
const sequelize = require('sequelize');

exports.createTask = (req, res) => {
  // Save Task to Database
  Task.create({
    title: req.body.title,
    description: req.body.description,
    status: 'pending',
    userId: req.userId
  })
    .then(task => {
        res.send({ message: "Task registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAllUserTask = (req, res) => {
    // Save Task to Database
    Task.findAll({
        where: {
          userId: res.req.userId
        },
        order: sequelize.literal("FIELD(tasks.status,'pending','in progress','completed')")
      })
      .then(task => {
        console.log(task);
          res.send({ data: task });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};


exports.getUserTask = (req, res) => {
    // Save Task to Database
    Task.findOne({
    where: {
        userId: res.req.userId,
        id: res.req.params.id
    }
    })
    .then(task => {
        res.send({ data: task });
    })
    .catch(err => {
    res.status(500).send({ message: err.message });
    });
};

exports.updateUserTask = (req, res) => {
    // Update Task to Database
    Task.update({status: res.req.body.status},{
    where: {
        userId: res.req.userId,
        id: res.req.params.id
    }
    })
    .then(task => {
        res.send({ message: "Task updated successfully!" });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};