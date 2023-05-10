import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    id : {type : Number, required : true},
    name : {type : String, required : true},
    continent : {type : String, required : true},
    foto: {type : String, required : true},
    population: {type : Number, required : true},
    user_id : {type : String, required : true}
}, {timestamps : true})

export const City = mongoose.model('city', citySchema)
