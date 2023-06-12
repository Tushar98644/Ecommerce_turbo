import Layout from "@/components/Layout";
import Link from "next/link";

const Product = () => {
    return (
        <Layout>
            <div className="m-6">
                <Link href="/product/create" className="text-white bg-blue-900 rounded-md p-2">Add new product</Link>
            </div>
        </Layout>
    );
}

export default Product;