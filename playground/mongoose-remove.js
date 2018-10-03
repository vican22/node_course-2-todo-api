const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

//Todo.findOneAndRemove()

Todo.findByIdAndRemove("5bb483e6ff5c1b8258e70ce3").then(todo => {
  console.log(todo);
});
