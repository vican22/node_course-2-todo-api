const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/TodoApp");

let db = {
  localhost: "mongodb://localhost:27017/TodoApp",
  mlab: "mongodb://<vican22>:<123456v>@ds121673.mlab.com:21673/todo-app-api"
};

mongoose.connect(db.localhost || db.mlab);
module.exports = {
  mongoose
};
