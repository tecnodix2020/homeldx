import axios from 'axios'

export default async ({ Vue }) => {
  const config = {
    withCredentials: false,
    baseURL: 'https://ximp2021.herokuapp.com/',
    crossdomain: true,
    headers: { 'Content-type': 'application/json' }
  }

  const axiosInstance = axios.create(config)

  Vue.prototype.$axios = axiosInstance
}
