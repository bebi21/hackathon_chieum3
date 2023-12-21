const { login } = require("../controller/user.controller");
const usersRouter = (app) => {
  app.post("/api/v1/login", login);
};

module.exports = {
  usersRouter,
};
