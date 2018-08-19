const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://adya_todo:adya97@ds123822.mlab.com:23822/tododb',(err,db)=>{
if(err){
    console.log('Unable to connect to mongodb server');    
}
console.log('Connected to monogodb server');

// db.collection('todo').deleteOne({ 
//     text: 'Eat lunch'
// }).then((result)=>{
// console.log(result);
// },(err)=>{
// console.log('Unable to delete todo',err);

// });
// db.collection('todo').deleteMany({ 
//     text: 'Eat lunch'
// }).then((result)=>{
// console.log(result);
// },(err)=>{
// console.log('Unable to delete todo',err);

// });

// db.collection('todo').findOneAndDelete({task: 'sing'}).then((result)=>{
// console.log(result);
// },(err)=>{
// console.log('Unable to delete todo',err);

// });

db.collection('todo').findOneAndDelete({
    _id:new ObjectId("5b771bd42b73a5573d3120ce")
}).then((result)=>{
    console.log(result);
    },(err)=>{
    console.log('Unable to delete todo',err);
    
    });
})