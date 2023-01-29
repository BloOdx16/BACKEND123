const mongoose=require("mongoose");
const UserDetailsSchema= new mongoose.Schema({
    username:String,
    password:String,
    email:String,

},
{
    collection:"POR TRACKER",
});
mongoose.model("POR TRACKER",UserDetailsSchema);