const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userID = '598211ff1ae6114545c13d29';

User.findOne({
  _id: userID
}).then((user) => {
  console.log('User: ', JSON.stringify(user, undefined, 2));
});

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('No user found');
  }
    console.log('User by ID: ', JSON.stringify(user, undefined, 2));
});

// var id = '59849bb979a01e5b4b53ac9e';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//     console.log('Todo by ID', todo);
//   }).catch((e) => console.log(e));
