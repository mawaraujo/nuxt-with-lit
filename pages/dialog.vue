<template>
  <main>
    <dialog-component
      ref="dialogRef"
      :title="data.title"
      :visible="data.show === true">
    
      <p>This is some really important stuff</p>
    </dialog-component>

    <button @click="openDialog">Open dialog</button>
  </main>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  const dialogRef = ref()

  const data = ref({
    title: 'Important',
    show: false
  })

  const onCloseDialog = () => {
    if(dialogRef.value) {
      dialogRef.value?.addEventListener('onClose', () => {
        data.value.show = false
      })
    }
  }

  const openDialog = () => {
    data.value.show = true
  }

  onMounted(() => {
    onCloseDialog()
  })

</script>