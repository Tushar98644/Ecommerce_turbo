import {model,Schema,models} from 'mongoose';

const ProductSchema = new Schema({
    title: {type:String,required:true},
    description: String,
    price: {type:Number,required:true},
});

export default models.Product || model('Product',ProductSchema);