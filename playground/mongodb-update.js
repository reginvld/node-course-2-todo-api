// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5980b585f7b291139d5ff8a8')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Mark Holmes',
    age: 25
  }, {
    $set: {
      name: 'Reggie Cooper'
    },
      $inc: {
        age: 1
      }
  }, {
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  });
  //db.close();
});
