const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://adya_todo:adya97@ds123822.mlab.com:23822/tododb',(err,db)=>{
if(err){
    console.log('Unable to connect to mongodb server');    
}
console.log('Connected to monogodb server');
// db.collection('todo').find({ 
//     _id: new ObjectId('5b771bd42b73a5573d3120ce')
// }).toArray().then((docs)=>{
// console.log('todo: ');
// console.log(JSON.stringify(docs,undefined,2));

// },(err)=>{
// console.log('Unable to fetch todo',err);

// });
// db.collection('todo').find().count().then((count)=>{
// console.log(`todo count: ${count}`);
// },(err)=>{
// console.log('Unable to fetch todo',err);

// });
db.collection('tasks').find({ 
    text: 'Task text'
}).toArray().then((docs)=>{
console.log('tasks: ');
console.log(JSON.stringify(docs,undefined,2));

},(err)=>{
console.log('Unable to fetch todo',err);

});

})