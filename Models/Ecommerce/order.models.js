import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    order:{
        type:Number,
        required:true
    },
    Customer :{
        type:mongoose.Schema.Type.ObjectId,
        ref:'User'
    }

},{timestames:true});

export const  Order = mongoose.model('Order',orderSchema);