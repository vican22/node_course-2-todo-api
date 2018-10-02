const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

const id = "5bb33c808d337a3823302376";

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("Id was not found");
    }

    console.log("Valid user", user);
  })
  .catch(e => console.log(e));
// const id = "5bb3672559d9f75027362b05";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found!");
//     }
//     console.log("Todo by Id", todo);
//   })
//   .catch(e => console.log(e));
