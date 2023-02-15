<!--
  Lit size
  https://bundlephobia.com/package/lit@2.6.1
 -->

<template>
  <main>

    <template v-for="widget in widgets">
      <p>{{ widget.name }}</p>
      
      <template v-if="widget.type === 'Video'">
        <video-widget-component
          alt="Video alt"
          width=""
          height="400px"
          :url="widget.url" />
      </template>

      <template v-if="widget.type === 'Image'">
        <image-widget-component
          alt="Video alt"
          width=""
          height="300"
          :url="widget.url" />
      </template>
    </template>

  </main>
</template>

<script lang="ts" setup>
  import { widgets } from '@/core/database/widgets'
</script>
