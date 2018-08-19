var mongoose=require('mongoose');

var User=mongoose.model('User',{
    email:{
        required:true,
        type:String,
        minlength:1,
        trim:true
    }
});

var newUser=new User({
    email:'adya@123'
})
newUser.save().then((doc)=>{
console.log('User Created',doc);

},(e)=>{
console.log('Unable to create user',e);

})
module.exports={User}