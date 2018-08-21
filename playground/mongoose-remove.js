const {ObjectId}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/users');

//multiple (Todo.remove())
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove
Todo.findOneAndRemove({id:'5b7c263a2b73a5573da12d90'}).then((todo)=>{
    console.log(todo);
    
})

//Todo.findByIdAndRemove
// Todo.findByIdAndRemove('5b7c263a2b73a5573da12d90').then((todo)=>{
//     console.log(todo);
    
// })