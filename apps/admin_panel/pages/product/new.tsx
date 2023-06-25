import { Layout } from "@/components";

const New_Product = () => {
    return (
        <Layout>
            <h1 className="mb-12 text-3xl text-blue-900 ">New Product</h1>
            <h1 className="pb-4 text-blue-900 text-xl">Product Name</h1>
            <input type="text" placeholder="enter a product name" />
            <h1 className="text-blue-900 text-xl pb-4">Description</h1>
            <textarea id="description" placeholder="description"></textarea>
            <h1  className="text-blue-900 text-xl pb-4">Price(in USD)</h1>
            <input type="number" placeholder="enter a price" />
            <div className="items-center flex justify-center">
                <button className="btn-dark-primary">Save</button>
            </div>
        </Layout>
    );
}

export default New_Product;