<template>
  <div class="container">
    <div class="hero">
      <div class="hero__header">
        <h1 class="hero__title">{{welcomeRole}}</h1>
        <p class="hero__message"> This page appear only when you selected a role, thank you.</p>
      </div>
      <section class="hero__roles" ref="heroRoles">
        <div v-for="(item,index) in roles" :key="index" class="hero__roles__item">
          <RoleItem :role="item" :selected="role?.id === item.id" @click="selectRole(item)" />
        </div>
      </section>
      <div class="hero__footer">
        <RoleButton :disabled="!isRoleSelected" />
      </div>
      <div class="hero__copyright">
        <span class="hero__copyright__text">This project is to practice using new technologie of vue 3</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useSelectRoleStore from '@/store/useSelectRole'
import { computed, defineComponent, onMounted, ref } from 'vue'
import RoleButton from './RoleButton.vue'
import RoleItem from './RoleItem.vue'
import { onKeyStroke } from '@vueuse/core'
import gsap from 'gsap'

export default defineComponent({
  components: { RoleItem, RoleButton },
  setup () {
    const heroRoles = ref<HTMLDivElement>()
    const selectRoleStore = useSelectRoleStore()
    const timeline = gsap.timeline()
    selectRoleStore.getInitialDataRoles()

    onKeyStroke('ArrowLeft', () => {
      selectRoleStore.selectPreviousRole()
    })

    onKeyStroke('ArrowRight', () => {
      selectRoleStore.selectNextRole()
    })

    onMounted(() => {
      gsap.from('.hero__roles__item', {
        translateY: 30,
        opacity: 0,
        stagger: 0.1
      })
      gsap.from('.hero__footer', {
        translateX: 200,
        opacity: 0
      })
    })

    return {
      welcomeRole: computed(() => selectRoleStore.welcomeRole),
      roles: computed(() => selectRoleStore.roles),
      role: computed(() => selectRoleStore.role),
      isRoleSelected: computed(() => selectRoleStore.isRoleSelected),
      selectRole: selectRoleStore.selectRole,
      heroRoles
    }
  }
})
</script>

<style lang="scss">
$hero : hero;
.#{$hero} {
  border-radius: 10px;
  padding: 2rem 3rem;
  width: 800px;
  max-width: 90%;
  background: white;
  margin:auto;
  &__header {
    margin-bottom: 50px;
  }
  &__title {
    font-size: 1.2rem;
    color: var(--color-text-base);
  }
  &__message{
    color: var(--color-text-secondary);
    font-size:.9rem;
  }
  &__roles {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 26px;
  }
  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  &__copyright {
    margin-top: 2em;
    &__text {
    color: var(--color-text-secondary);
    font-size:.8rem;
    }
  }
}
.container {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,#192131 50%,#060F26 50%);
}
</style>
