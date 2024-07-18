import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({},{timestampes:true});

export const Doctor = mongoose.Model("Doctor",doctorSchema);