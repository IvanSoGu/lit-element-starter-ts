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
 @customElement('mi-slot-chachi')
 export class MiSlotChachi extends LitElement {
   static override styles = css`
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
 
   /**
    * Propiedad de tipo String que maneja el dato a presentar
    */
 
    override render() {
    return html`
    <div>
    <slot name="cabecera"></slot>
    <h4>Slot complejo</h4>
    <slot name="pie"></slot>
    <slot>I am fallback content</slot>
    </div>
    `;
    }
}
 
 declare global {
   interface HTMLElementTagNameMap {
     'mi-slot-chachi': MiSlotChachi;
   }
 }
 
 