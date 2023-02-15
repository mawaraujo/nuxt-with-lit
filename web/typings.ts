export namespace Widget {
  export enum Types {
    Image = 'Image',
    Video = 'Video'
  }

  export interface Widget {
    name: string,
    type: keyof typeof Types,
    url: string,
  }

  export interface VideoWidget extends Widget {
    onPaused?: () => void,
    onPlay?: () => void
  }
}