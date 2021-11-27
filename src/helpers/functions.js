import {products} from './db'

function selection (list){
    return list.map(product => {
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price_discount,
            url: product.preview
        }
    })
}

export const productCart = (id) => {
    const prod = findProductbyID(id);

    return {
        id: prod.id,
        name: prod.title,
        preview: prod.preview,
        price: prod.price_discount,
        quantity: 1
    }
}

export const findProductsbyOffer = () => {
    const filter = products.filter(product => product.offer)
    return selection(filter)
}

export const productsPreview = () => {
    return selection(products)
}

export const findProductbyID = (id) => {
    return products.find(product => product.id == id);
}

export const findProductsbyCategory = (category) => {
    const filter = products.filter(product => product.category == category);
    return selection(filter)
}