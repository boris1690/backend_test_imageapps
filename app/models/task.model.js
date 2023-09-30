module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("tasks", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: ['pending', 'in progress', 'completed']
      }
    });
  
    return Task;
  };