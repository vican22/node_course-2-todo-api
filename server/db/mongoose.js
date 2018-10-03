const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/TodoApp");

// let connectionString =
//   process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp";
// connectionString =
//   "mongodb://vican22:qwertz6@ds121673.mlab.com:21673/todo-app-api";

// mongoose
//   .connect(connectionString)
//   .then(() => {
//     console.log(`connected to ${connectionString}`);
//   })
//   .catch(err => console.log(`error connecting: ${err}`));

let db = {
  localhost: "mongodb://localhost:27017/TodoApp",
  mlab: "mongodb://vedran:qwertz6@ds121673.mlab.com:21673/todo-app-api"
};

mongoose.connect(process.env.PORT ? db.localhost : db.mlab);
module.exports = {
  mongoose
};
