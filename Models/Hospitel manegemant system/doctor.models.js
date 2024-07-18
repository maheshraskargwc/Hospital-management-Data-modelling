import mongoose from "mongoose";

const doctorSchema = new mongoose.schema({},{timestames});

export const Doctor = mongoose.model("Doctor",doctorSchema);