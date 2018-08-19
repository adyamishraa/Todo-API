const {ObjectId}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/users');

// var id='5b79ae4b8aff9919b05397f6';
// if(!ObjectId.isValid(id)){
//     console.log('ID not found!');
    
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
// console.log(todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('FIND ONE');
// console.log(todo);
// });
// Todo.findById({id}).then((todo)=>{
//     if(!id){
//       return console.log('ID not found!');
        
//     }
//     console.log('FIND ONE');
// console.log(todo);
// }).catch((e)=>console.log(e));


//USER
User.findById('5b79bef666a4c137302dab94').then((user)=>{
    if(!user){
        return console.log('user not found');
    }
    console.log(user);
}).catch((e)=>console.log(e));