<!--
  Lit size
  https://bundlephobia.com/package/lit@2.6.1
 -->
 
 <template>
   <main>
    <p>{{ data.name }}</p>

    <input
      type="text"
      placeholder="Change the item name"
      @input="(event) => handleChangeName(event.target.value, data.url)">

    <video-widget-component
      ref="videoWidgetRef"
      alt="Video alt"
      width=""
      height="300"
      :url="data.url" />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Widget } from 'web-components';

const videoWidgetRef = ref<Widget.VideoWidget>();

const data = ref<Widget.VideoWidget>({
  name: 'Big Buck Bunny Video',
  type: Widget.Types.Video,
  url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
});

const handleChangeName = (newName: string) => data.value.name = newName
const handlePaused = (): void => console.log('Paused')
const handlePlay = (): void => console.log('Resume')

onMounted(() => {
  if(videoWidgetRef.value) {
    videoWidgetRef.value.onPaused = handlePaused
    videoWidgetRef.value.onPlay = handlePlay
  }
})
</script>
