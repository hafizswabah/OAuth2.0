import mongoose from "mongoose";
function dbConnect(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(()=>{
        console.log('Data base connected');
    }).catch(err=>console.log('db-err',err))
}
export default dbConnect