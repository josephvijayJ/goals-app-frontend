import axios from 'axios'

const API_URL = 'https://goals-app-backend123.herokuapp.com/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post('https://goals-app-backend123.herokuapp.com/api/users', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post('https://goals-app-backend123.herokuapp.com/api/users/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
