import mongooseconnect from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextApiResponse, NextApiRequest } from "next";

const NewProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    await mongooseconnect();
    if (method === "POST") {
        const { title, price, description } = req.body;
        const NewProduct = await Product.create({
            title,
            price,
            description,
        });
        console.log(NewProduct);
        return res.status(201).json({ success: true, data: NewProduct });    }    
};
export default NewProduct;