import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('video-widget-component')
export default class Video extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      width: 100%,
      height: 100%,
    }
  `;

  // Declare reactive properties
  @property()
  url: string = '';

  @property()
  alt: string = '';

  @property()
  width: string = '100%';

  @property()
  height: string = '100%';

  // Render the UI as a function of component state
  render() {
    return html`
      <video
        autoplay="off"
        controls
        width="${this.width}"
        height="${this.height}"
        alt="${this.alt}"
        src="${this.url}">
      </video>
    `;
  }
}