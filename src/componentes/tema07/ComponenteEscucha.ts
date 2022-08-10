/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, query} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('componente-escucha')
export class ComponenteEscucha extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @query('#name', true) _name!: HTMLInputElement;
  @query('#number', true) _number!: HTMLInputElement;
  protected override render() {
    return html`
      <p>Name: <input id="name" /></p>
      <p>Number: <input id="number" /></p>
      <p><button @click=${this._dispatchLogin}>Login</button></p>
    `;
  }
  private _dispatchLogin() {
    const name = this._name.value.trim();
    const number = this._number.value.trim();
    if (name && number) {
      const options = {
        detail: {name, number},
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent('mylogin', options));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'componente-escucha': ComponenteEscucha;
  }
}
