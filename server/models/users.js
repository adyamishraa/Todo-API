var mongoose=require('mongoose');
const validator=require('validator');
// {
//     email:'adya@example.com';
//     password: 'myPass123';
//     tokens:[{
//         access:'auth',
//         token:'qwertyuiop'
//     }]
// }
var User=mongoose.model('User',{
    email:{
        required:true,
        type:String,
        minlength:1,
        trim:true,
        unique:true,
        validate:{
            validator:validator.isEmail,
            message:'{VALUE} is not a valid email'
        }
    },
        password:{
            type:String,
            reuired:true,
            minlength:6
        },
        tokens:[{
            access:{
                type:String,
                required:true
            },
            token:{
                type:String,
                required:true
            }
        }]
});

// var newUser=new User({
//     email:'adya@123'
// })
// newUser.save().then((doc)=>{
// console.log('User Created',doc);

// },(e)=>{
// console.log('Unable to create user',e);

// })
module.exports={User}