import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('video-widget-component')
export default class Image extends LitElement {
  @property() url: string = ''
  @property() alt: string = ''
  @property() width: string = '100%'
  @property() height: string = '100%'
  
  @property() onPaused?: Function
  @property() onPlay?: Function

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      width: 100%,
      height: 100%,
    }
  `;


  // Render the UI as a function of component state
  render() {
    return html`
      <video
        @pause="${this.onPaused}"
        @play="${this.onPlay}"
        autoplay="off"
        controls
        loading="lazy"
        width="${this.width}"
        height="${this.height}"
        alt="${this.alt}"
        src="${this.url}">
      </video>
    `;
  }
}