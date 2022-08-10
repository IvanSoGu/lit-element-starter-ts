/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement} from 'lit/decorators.js';

 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('componente-madre')
 export class ComponenteMadre extends LitElement {
   static override styles = css`
     :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
        color:blue;
     }
     :host(.green) {
        color: green;
     }
   `;
 
   /**
    * Propiedad de tipo String que maneja el dato a presentar
    */
 
    override render() {
    return html`
    <p> I am the Mother component </p>
    `;
    }
}
 
 declare global {
   interface HTMLElementTagNameMap {
     'componente-madre': ComponenteMadre;
   }
 }
 
 