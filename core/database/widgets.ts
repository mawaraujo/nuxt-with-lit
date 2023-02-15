import { Widgets } from "../typings/widgets";

export const widgets = [
  {
    name: 'Dog Image',
    type: Widgets.Types.Image,
    url: 'https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg'
  },
  {
    name: 'Big Buck Bunny Video',
    type: Widgets.Types.Video,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    name: 'For Bigger Blazes',
    type: Widgets.Types.Video,
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  }
] as Array<Widgets.Widget>;