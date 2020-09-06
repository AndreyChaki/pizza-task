import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: URL
})

export const catalogAPI = {
  getCatalogItems() {
    return instance.get('/db.json')
  }
}
