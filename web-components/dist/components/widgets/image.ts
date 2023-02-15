import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('image-widget-component')
export default class Image extends LitElement {
  @property() url: string = ''
  @property() alt: string = ''
  @property() width: string = '100%'
  @property() height: string = '100%'

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
      <img
        loading="lazy"
        width="${this.width}"
        height="${this.height}"
        alt="${this.alt}"
        src="${this.url}">
      </img>
    `;
  }
}