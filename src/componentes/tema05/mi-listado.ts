/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';

 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('mi-listado')
 export class MiListado extends LitElement {
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
 
   @property({
    type: Array
   })
   colors: Array<String> = ["green", "black", "blue"];
   
   override render() {
    return html`
    <ul>
    ${this.colors.map((color) =>
    html`<li style="color: ${color}">Color: ${color}</li>`
    )}
    </ul>
    `;
    }
}
 
 declare global {
   interface HTMLElementTagNameMap {
     'mi-listado': MiListado;
   }
 }
 
 