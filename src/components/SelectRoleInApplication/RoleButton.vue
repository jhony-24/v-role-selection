<template>
  <button class="role">Next</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>
.role {
  background: var(--color-primary);
  color: white;
  border-radius: 5px;
  padding: 1rem 6rem;
  box-sizing: border-box;
  border: none;
  font-weight: bold;
  outline: none;
  &[disabled] {
    background-color: rgba(100,100,100,.1);
    color: gray;
  }
}
</style>
