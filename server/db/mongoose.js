var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://adya_todo:adya97@ds123822.mlab.com:23822/tododb');


module.exports={
    mongoose
}
