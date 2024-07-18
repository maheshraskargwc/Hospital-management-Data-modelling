import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
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
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        reqiured:true
    },
    
},{timestampes:true});

export const Patient= mongoose.model('Patient',patientSchema);