import mongoose from "mongoose";

// Mini Model

const orderItemSchema = new mongoose.Schema(
    {
        productId:{
            type:mongoose.Schema.Type.ObjectID,
            ref:"Product"
        },
        quantity:{
            type:Number,
            required:true,
        }

},{timestamps:true});

const productSchema = new mongoose.Schema(
    {
        Description:{
        type:String ,
        required:true 
        },

        Name:{
            type:String,
            required:true
        },

        productImage:{
            type:String,
        },

        price:{
            type:Number,
            default:0,
            required:true
        },

        stock:{
            type:Number,
            default:0,
            required:true
        },

        productCategory:{
            type:mongoose.Schema.Type.ObjectID,
            ref:"Category",
            required:true
        },

        Owner:{
            type:mongoose.Schema.Type.ObjectID,
            ref:"User"
        },

        orderItem:{
            type:[orderItemSchema]
        },
        address:{
            type:String,
            required : true
        },
        status:{
            type: String,
            enum: ["PENDING" , "CANCELLED" , "DELIVERED"] ,
            defualt:"PENDING"

        }

    },
{timestamps:true});

export const Product = mongoose.model('Product',productSchema);