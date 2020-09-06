import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/'
})

export const catalogAPI = {
  getCatalogItems() {
    return instance.get('db.json')
  }
}
