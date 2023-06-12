// use coding woth david tutorial
import Layout from "@/components/Layout"
import { useState } from "react";
import axios from "axios";

const Create = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState(0);
    const data={
        title,
        description,
        price
    }
    const createproduct = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const res = await axios.post('/api/products',data);
        console.log(res);
    }

    return (
        <Layout>
            <form action="submit" className="m-[4vw] text-blue-900" onSubmit={createproduct}>
                <div className="flex flex-col gap-4">
                    <h1 className="m-4 text-3xl">New Product</h1>
                    <div className="m-2">
                        <label htmlFor="Product Name"></label>
                        <input type="text" placeholder="product name" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="m-2">
                        <label htmlFor="Description"></label>
                        <textarea name="description" id="" placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="m-2">
                        <label htmlFor="Price(in USD)"></label>
                        <input type="number" name="price" id="" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                    <div className="items-center text-center">
                        <button className="btn-primary" type="submit">Save</button>
                    </div>
                </div>
            </form>
        </Layout>
    );
}

export default Create;