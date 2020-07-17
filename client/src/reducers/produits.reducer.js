import { 
    GET_ALL_PRODUITS_SUCCESS, 
    GET_ALL_PRODUITS_FAILED,
    DELETE_PRODUIT_BY_ADMIN, 
    GET_ALL_PRODUITS_ATTEMPTING,
} from "../actions/types"

const initialState = {
    attempting: false,
    isDelete: false,
    produits: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PRODUITS_ATTEMPTING:
            return { ...state, attempting: true }

        case GET_ALL_PRODUITS_SUCCESS:
            return { ...state, attempting: true, produits: action.payload }

        case GET_ALL_PRODUITS_FAILED:
            return { ...state, attempting: false }

        case DELETE_PRODUIT_BY_ADMIN:
            return { ...state, isDelete: true }
        
        default:
            return state
    }
}
