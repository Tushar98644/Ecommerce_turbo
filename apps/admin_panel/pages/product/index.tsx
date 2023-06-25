import { Layout } from "@/components";
import Link from "next/link";

const Product = () => {
    return ( 
        <Layout>
            <Link href={"/product/new"}>
            <button className="btn-primary">New product</button>
            </Link>
        </Layout>
     );
}
 
export default Product;