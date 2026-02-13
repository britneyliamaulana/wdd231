// products.mjs
export async function getProducts() {
    try {
        const response = await fetch('scripts/data/products.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
