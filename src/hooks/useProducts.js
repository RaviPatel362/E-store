import { products } from "../products"
export const useProducts = () => {
    const getProducts = ()=>{
        return products;
    }
    const getProductById = (id) =>{
        const product = products.find(p=>p.id == id);
        return product;
    }

    return {
        getProductById,
        getProducts,
    }
}