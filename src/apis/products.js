import axios from 'axios';

export async function getProductsData() {
    try{
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response);
        if(response && response.status === 200) {
            return response;
        }
    }catch(err) {
        console.log('getProductsData api error', err);
        return err;
    }
}

export async function getProductsDataById(productId) {
    try{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        if(response && response.status === 200) {
            return response.data;
        }
    }catch(err) {
        console.log('getProductsData api error', err);
        return err;
    }
}