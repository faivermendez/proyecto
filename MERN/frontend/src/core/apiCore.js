import { API } from '../config';

export const getProducts = () =>{
    return fetch (
        `${API}/product/products`,
        {
            method: 'GET'
        }
    )
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => console.log(err));
}