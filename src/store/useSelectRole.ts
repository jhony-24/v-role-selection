import roles from '@/data/roles'
import { Role } from '@/types'
import { defineStore } from 'pinia'
import useUserStore from './useUserStore'

export interface SelectRoleStore {
  indexRole : number;
  role : Partial<Role> | undefined,
  roles : Role[],
}

export function initialState (): SelectRoleStore {
  return {
    role: undefined,
    roles: [],
    indexRole: -1
  }
}

const useSelectRoleStore = defineStore({
  id: '',
  state: initialState,
  getters: {
    isRoleSelected: state => state.role,
    welcomeRole () {
      const userStore = useUserStore()
      return `Hello ${userStore.name}, select your current role`
    }
  },
  actions: {
    selectRole (role : Role) {
      this.role = this.role?.id === role.id ? undefined : role
      this.indexRole = this.roles.indexOf(role)
    },
    selectNextRole () {
      if (this.indexRole !== -1 && this.indexRole < this.roles.length - 1) {
        this.indexRole++
        this.role = this.roles[this.indexRole]
      }
    },
    selectPreviousRole () {
      if (this.indexRole !== -1 && this.indexRole > 0) {
        this.indexRole--
        this.role = this.roles[this.indexRole]
      }
    },
    async submitRole () {
      alert()
    },
    async getInitialDataRoles () {
      this.roles = roles.data as Role[]
    }
  }
})

export default useSelectRoleStore
