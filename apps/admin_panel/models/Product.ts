import {model,Schema} from 'mongoose';

const ProductSchema = new Schema({
    title: {type:String,required:true},
    description: String,
    price: {type:Number,required:true},
});

export default model('Product',ProductSchema);