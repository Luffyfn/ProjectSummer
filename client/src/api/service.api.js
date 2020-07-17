import axios from 'axios'

export const apiGetAllServices = () =>{
    return axios.get('/api/routes/services')
}

export const apiDeleteServiceByAdmin = (_id) =>{
    return axios.delete(`/api/admin-routes/service/${_id}`)
}
