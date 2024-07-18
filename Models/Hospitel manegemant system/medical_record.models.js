import mongoose from "mongoose";

const medicalrecordSchema= new mongoose.Schema({},{timestampes:true});

export const MedicalRecord = mongoose.model("MedicalRecord",medicalrecord);