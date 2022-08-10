import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('componente-personalizado')
export class ComponentePersonalizado extends LitElement {
  @property() name = '';
  @property() number = '';

  protected override render() {
    return html` <p @mylogin=${this._loginListener}><slot></slot></p>
      <p>Login: ${this.name + ':  ' + this.number}</p>`;
  }

  private _loginListener(e: CustomEvent) {
    this.name = e.detail.name;
    this.number = e.detail.number;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'componente-personalizado': ComponentePersonalizado;
  }
}
