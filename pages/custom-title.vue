<template>
  <main>
    <div>
      <header-component
        :title="header.title" />
        
      <input
        type="text"
        placeholder="Change document title"
        @input="handleChangeTItle">
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Header } from 'web-components'

const header = ref<Header>({
  title: 'Welcome page'
})

const handleChangeTItle = (t: Event) => {
  header.value.title = (t.target as HTMLInputElement).value
}

</script>