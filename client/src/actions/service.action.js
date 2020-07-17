import {
    GET_ALL_SERVICES_SUCCESS,
    GET_ALL_SERVICES_FAILED,
    DELETE_SERVICE_BY_ADMIN, 
    GET_ALL_SERVICES_ATTEMPTING
} from './types'
import { apiGetAllServices, apiDeleteServiceByAdmin } from '../api/service.api'
import { addError, clearErrors} from './error.action';

export const getAllServices = () => {
    return async dispatch => {  
        dispatch({ type: GET_ALL_SERVICES_ATTEMPTING })
        try {
            const {data: { services }} = await apiGetAllServices()
            dispatch({ type: GET_ALL_SERVICES_SUCCESS, payload: services })
        } catch (err) {
            dispatch({ type: GET_ALL_SERVICES_FAILED })
        }
    }
}

export const deleteServiceByAdmin = _id => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        dispatch({ type: DELETE_SERVICE_BY_ADMIN })
        await apiDeleteServiceByAdmin(_id);
        dispatch(getAllServices());
      } catch (err) {
        dispatch(addError(err));
      }
    }
  }


