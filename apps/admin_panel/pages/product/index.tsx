import { Layout } from "@/components";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/product')
            .then((res: { data: any }) => setProducts(res.data));
    }, []);

    return (
        <Layout>
            <Link href={"/product/new"}>
                <button className="btn-primary">New product</button>
            </Link>
            <div className="flex flex-col gap-4">
                {products.map(product => (
                    <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
                        <h1 className="text-xl font-semibold">{product.title}</h1>
                        <p>{product.description}</p>
                        <p className="text-xl font-semibold">${product.price}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Product;