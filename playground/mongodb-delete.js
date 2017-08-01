// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'guild runs'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'guild runs'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //     console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5980a503fc399b4211d33e3d')
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteMany({name: 'Reggie Cooper'}).then((result) => {
    console.log(result);
  });

  //db.close();
});
