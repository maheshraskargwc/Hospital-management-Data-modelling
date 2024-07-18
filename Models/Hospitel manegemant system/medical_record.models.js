import mongoose from "mongoose";

const medical_recordSchema = new mongoose.Schema({},{timestampes:true});

export const MedicalRecord = mongoose.model(" MedicalRecord", medical_recordSchema);