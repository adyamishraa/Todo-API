const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://adya_todo:adya97@ds123822.mlab.com:23822/tododb',(err,db)=>{
if(err){
    console.log('Unable to connect to mongodb server');    
}
console.log('Connected to monogodb server');

// db.collection('todo').findOneAndUpdate({
//     name:'Adya'},
// {$set:{ name:'Adya Mishra'}},
// {
//     returnOriginal:false}).then((result)=>{
//         console.log(result);
        
//     })
db.collection('todo').findOneAndUpdate({
    name:'Adya Mishra'},
{$inc: {age:1}},
{
    returnOriginal:false}).then((result)=>{
        console.log(result);
        
    })
//db.close();
})