import { Widget } from "web-components";

export const widgets = [
  {
    name: 'Dog Image',
    type: Widget.Types.Image,
    url: 'https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg'
  },
  {
    name: 'Big Buck Bunny Video',
    type: Widget.Types.Video,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    name: 'For Bigger Blazes',
    type: Widget.Types.Video,
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  }
] as Array<Widget.Widget>;