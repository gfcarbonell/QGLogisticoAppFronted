import axios from 'axios'

const Http = () => {
  const authHeaders = (token) => {
    return {
      'Authorization': `Bearer ${token}`,
    }
  }
  const authenticated = () => {
    const token = localStorage.getItem('token')
    const headers = authHeaders(token)
    return axios.create({ headers })
  }
  return {
    ...axios,
    authenticated,
  }
}
export default Http()