const { authJwt } = require("../middleware");
const controller = require("../controllers/task.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/task/create",
    [
      authJwt.verifyToken
    ],
    controller.createTask
  );


  app.get(
    "/api/task",
    [
      authJwt.verifyToken
    ],
    controller.getAllUserTask
  );

  app.get(
    "/api/task/:id",
    [
      authJwt.verifyToken
    ],
    controller.getUserTask
  );

  app.put(
    "/api/task/:id",
    [
      authJwt.verifyToken
    ],
    controller.updateUserTask
  );

};