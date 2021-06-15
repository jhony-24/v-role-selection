<template>
  <div class="role" :class="[selected && 'selected']">
    <h3 class="role__title">{{role.name}}</h3>
    <span class="role__detail">{{role.id}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    role: {
      type: Object,
      // eslint-disable-next-line
      default: () => {}
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.role {
  border: 2px solid transparent;
  box-shadow: 0 4px 3px rgba(0,0,0,.03), 0 0px 2px rgba(0,0,0,.02);
  padding: 6px;
  border-radius: 6px;
  transition: .3s;
  cursor: pointer;
  &:not(.selected):hover {
    background-color: rgba(100,100,100,.03);
  }
  &__title {
    font-size: .9rem;
    margin: 0;
  }
  &__detail {
    color: var(--color-text-secondary);
    font-size: .8em;
    display: block;
    margin-top: 10px;
  }
  &.selected {
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    background-color: rgba(30,130,230,.06);
      box-shadow: 0 10px 10px rgba(0,0,0,.03);
  }
}
</style>
