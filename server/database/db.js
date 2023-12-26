import mongoose from "mongoose";

const Connection = async(USERNAME,PASSWORD)=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-cmmpv4p-shard-00-00.zwzyzce.mongodb.net:27017,ac-cmmpv4p-shard-00-01.zwzyzce.mongodb.net:27017,ac-cmmpv4p-shard-00-02.zwzyzce.mongodb.net:27017/?ssl=true&replicaSet=atlas-skckh3-shard-0&authSource=admin&retryWrites=true&w=majority`;
try {
     await mongoose.connect(URL,{useNewUrlParser:true});
   console.log('Database is connected successfully');
} catch (error) {
    console.log('Error while connecting database ',error.message)
    
}    
}
export default Connection;