

export const getMainMenu = async () => {
    const response = await fetch('http://127.0.0.1:8000/product-create/')
    const products = await response.json()
    const result = Object.values(products)
    return result
}