import axios from 'axios'

export const apiGetAllProduits = () =>{
    return axios.get('/api/routes/produits')
}

export const apiDeleteProduitByAdmin = (_id) =>{
    return axios.delete(`/api/admin-routes/produit/${_id}`)
}
