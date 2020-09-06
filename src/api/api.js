import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
})

export const catalogAPI = {
  getCatalogItems() {
    return instance.get('/db.json')
  }
}
