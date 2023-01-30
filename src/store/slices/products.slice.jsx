import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload;
            return products;
        }

    }
})

export const getProductsThunk = () => dispatch =>{
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then(res => dispatch(setProducts(res.data)));
}

export const filterProductsCategoryThunk = (id) => dispatch =>{
   return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then(res => dispatch(setProducts(res.data)));
}

export const filterNewProductsThunk = (searchProduct) => dispatch =>{
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=` + searchProduct)
        .then(res => dispatch(setProducts(res.data)))
}

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
