import mongoose from "mongoose";

const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"HOTEL"
    })
    .then(()=>{
        console.log("connected to database succesfully");
    }).catch(err=>{
        console.log('some erroroccured ${err}');
    })
};
export default dbConnection;
