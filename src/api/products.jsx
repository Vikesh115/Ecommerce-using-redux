import axios from 'axios'
import { setProduct } from '../slice/productSlice';
import { setFilter } from '../slice/filterSlice';

export const getProducts = () => async dispatch =>{
   const url = 'https://fakestoreapi.com/products';
   try {
      const {data} = await axios.get(url)
      dispatch(setProduct(data))
      dispatch(setFilter(data))
      return data;
   } catch (error) {
    return error;
   }
}
