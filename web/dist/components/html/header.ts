import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('header-component')
export default class Header extends LitElement {
  @property()
  title: string = ''
  
  updated(changedProperties: Map<string, any>): void {    
    if (changedProperties.has('title')) {
      this.onchangeTitle()
    }
  }

  private onchangeTitle(): void {
    document.title = this.title
  }
}