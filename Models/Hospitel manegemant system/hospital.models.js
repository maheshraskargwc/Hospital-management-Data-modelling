import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({},{timestampes:true});

export const Hospital = mongoose.model("Hospital",hospitalSchema);