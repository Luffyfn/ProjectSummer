import { 
    GET_ALL_PRODUITS_SUCCESS, 
    GET_ALL_PRODUITS_FAILED,
    DELETE_PRODUIT_BY_ADMIN, 
    GET_ALL_PRODUITS_ATTEMPTING 
} from './types'
import { apiGetAllProduits, apiDeleteProduitByAdmin } from '../api/produit.api'
import { addError, clearErrors} from './error.action';

export const getAllProduits = () => {
    return async dispatch => {  
        dispatch({ type: GET_ALL_PRODUITS_ATTEMPTING })
        try {
            const {data: {produits}} = await apiGetAllProduits()
            dispatch({ type: GET_ALL_PRODUITS_SUCCESS, payload: produits })
        } catch (err) {
            dispatch({ type: GET_ALL_PRODUITS_FAILED })
        }
    }
}

export const deleteProduitByAdmin = _id => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        dispatch({ type: DELETE_PRODUIT_BY_ADMIN })
        await apiDeleteProduitByAdmin(_id);
        dispatch(getAllProduits())
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };


