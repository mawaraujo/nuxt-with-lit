export namespace Widget {
  export enum Types {
    Image = 'Image',
    Video = 'Video'
  }

  export interface Widget {
    name: string,
    type: keyof typeof Types,
  }

  export interface VideoWidget extends Widget {
    onPaused?: () => void,
    onPlay?: () => void,
    url: string,
    alt?: string
  }
}

export interface Header {
  title: string
}