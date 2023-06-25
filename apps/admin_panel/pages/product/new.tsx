import { Layout } from "@/components";
import { useState } from "react";
import axios from "axios";

const New_Product = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const createproduct = async (e: any) => {
        e.preventDefault();
        const data = {title, description, price};
        await axios.post('/api/product', data);
        console.log(data);
    };
    return (
        <Layout>
            <form action="submit" onSubmit={createproduct} className="w-full">
                <h1 className="mb-12 text-3xl text-blue-900 ">New Product</h1>
                <h1 className="pb-4 text-blue-900 text-xl">Product Name</h1>
                <input type="text" placeholder="enter a product name" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <h1 className="text-blue-900 text-xl pb-4">Description</h1>
                <textarea id="description" placeholder="description"  value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                <h1 className="text-blue-900 text-xl pb-4">Price(in USD)</h1>
                <input type="number" placeholder="enter a price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <div className="flex justify-center">
                    <button className="btn-dark-primary" type="submit">Save</button>
                </div>
            </form>
        </Layout>
    );
}

export default New_Product;