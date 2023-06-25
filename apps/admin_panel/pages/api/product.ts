import { NextApiResponse , NextApiRequest} from "next";

const NewProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    res.json(req.method);
    console.log(req.method);
}


    export default NewProduct;