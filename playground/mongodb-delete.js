const { MongoClient, ObjectId } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB ");

    //deleteMany
    // db.collection("Todos")
    //   .deleteMany({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // //findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Users")
    //   .deleteMany({ name: "Vedran" })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndDelete({ _id: ObjectId("5bb219c712ee502234279a84") })
      .then(result => {
        console.log(result);
      });

    //db.close()
  }
);
