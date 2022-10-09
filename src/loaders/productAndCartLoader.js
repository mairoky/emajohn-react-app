import { getFromDb } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const storedCart = getFromDb();
    const saveCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }
    return { products, saveCart };
}