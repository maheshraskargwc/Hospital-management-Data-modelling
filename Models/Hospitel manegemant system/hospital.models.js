import mongoose from "mongoose";

const hospitalSchema = new mongoose.schema({},{timestames:true});

export const Hospital = mongoose.model("Hospital" , hospitalSchema) ;