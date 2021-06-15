import { defineStore } from 'pinia'

export interface UserStore {
  name : string;
}

export function initialState (): UserStore {
  return {
    name: 'Barry'
  }
}

const useUserStore = defineStore({
  id: 'user',
  state: initialState
})

export default useUserStore
