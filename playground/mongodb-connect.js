// const MongoClient=require('mongodb').MongoClient;
// const {MongoClient}=require('mongodb');
const {MongoClient,ObjectId}=require('mongodb');
// var obj=new ObjectId();
// console.log(obj);


var user={name:'Adya',age:21};
// var {age}=user;
console.log(user.name);


MongoClient.connect('mongodb://adya_todo:adya97@ds123822.mlab.com:23822/tododb',(err,db)=>{
if(err){
    console.log('Unable to connect to mongodb server');    
}
console.log('Connected to monogodb server');

// db.collection('tasks').insertOne({
// text:'Something todo',
// completed:false
// },(err,result)=>{
// if(err){
//     return console.log('Unable to insert todo',err);    
// }

// console.log(JSON.stringify(result.ops,undefined,2));

// })
// db.collection('tasks').insertOne({
//     text:'Task text',
//     completed:false
// },(err,result)=>{
//     if(err){
//         return console.log('Unable to insert todo',err);

//     }
//     // console.log(JSON.stringify(result.ops,undefined,2));
//     console.log(result.ops[0]._id.getTimestamp());


// })

db.close();
});