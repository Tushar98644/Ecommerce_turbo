import {Schema} from 'mongoose';

const ProductSchema = new Schema({
    name: String,
    price: {type: Number, required: true},
    description: String,
});

export default ProductSchema;
