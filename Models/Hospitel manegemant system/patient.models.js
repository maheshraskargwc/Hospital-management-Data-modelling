import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({},{timestampes:true});

export const Patient= mongoose.model("Patient",patientSchema);