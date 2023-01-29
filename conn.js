const mongoose=require('mongoose');
console.log('mongoose there');
mongoose.connect('mongodb+srv://porTracker:ll6743ffes@cluster0.ha6dpnw.mongodb.net/LDAPcredintials?retryWrites=true&w=majority',{
    useNewUrlParser:true,
   
    useUnifiedTopology:true,
    
})
.then(console.log('connected to mongoose'))
.catch((error)=> console.log(error))

