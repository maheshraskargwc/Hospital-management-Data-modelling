import mongoose from "mongoose";

const doctorSchema = new mongoose.schema({
    name:{
        type: String,
        required:true
    },
    diagonseWith:{
        type:String,
        reqiured:true
    },
    address:{
        type:String,
        reqiured:true
    },
    age:{
        type:Number,
        reqiured:true
    },
    bloodgroup:{
        type:String,
        reqiured:true
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        reqiured:true
    },
},{timestames});

export const Doctor = mongoose.model('Doctor',doctorSchema);