<!--
  Lit size
  https://bundlephobia.com/package/lit@2.6.1

  Public test videos
  https://gist.github.com/jsturgis/3b19447b304616f18657

  Lit Google docs
  https://codelabs.developers.google.com/codelabs/lit-2-for-react-devs?hl=es-419#1
 -->
 
 <template>
   <main>
    <p>{{ data.name }}</p>

    <input
      type="text"
      placeholder="Change video url"
      @input="handleChangeUrl">

    <video-widget-component
      ref="videoWidgetRef"
      :alt="data.alt"
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
  alt: 'Custom video'
});

const handleChangeUrl = (t: Event): void => {
  const value: string = (t.target as HTMLInputElement).value;
  data.value.url = value
}

const handlePaused = (): void => console.log('Paused')
const handlePlay = (): void => console.log('Resume')

onMounted(() => {
  if(videoWidgetRef.value) {
    videoWidgetRef.value.onPaused = handlePaused
    videoWidgetRef.value.onPlay = handlePlay
  }
})
</script>
