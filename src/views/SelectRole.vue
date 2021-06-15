<template>
  <div class="about">
    <SelectRoleInApplication />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SelectRoleInApplication from '../components/SelectRoleInApplication/SelectRoleInApplication.vue'

export default defineComponent({
  components: {
    SelectRoleInApplication
  }
})
</script>
