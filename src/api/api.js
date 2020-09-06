import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {'API-KEY': '2f804a5b-7f3d-4dfa-906d-1eb4a95278d5'},
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const authAPI = {
  authMe() {
    return instance.get('auth/me')
  },
  login(email, password, rememberMe = false) {
    return instance.post(`/auth/login/`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`/auth/login/`)
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status})
  },
  savePhoto(file) {
    let formData = new FormData()
    formData.append('image', file)
    return instance.put(`profile/photo`, formData)
  },
  updateProfile(data) {
    return instance.put(`profile/`, data)
  },
}

export const followAPI = {
  follow(id) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
  },
  unfollow(id) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
  }
}

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  }
}