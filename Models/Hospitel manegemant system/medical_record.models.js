import mongoose from "mongoose";

const medicalrecordSchema= new mongoose.Schema({
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
},{timestampes:true});

export const MedicalRecord = mongoose.model('MedicalRecord',medicalrecord);