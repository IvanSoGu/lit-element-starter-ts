/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 import {choose} from 'lit/directives/choose.js';
 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('mis-condiciones')
 export class MisCondiciones extends LitElement {
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
    type: Number
   })
   numero?: Number;
   

   override render() {
    return html` ${choose(
    // variable a comprobar
    this.numero, [
    // caso “home”
    [0, () => html`<h1>La variable de entrada es 0</h1>`],
    // caso “about”
    [1, () => html`<h1>La variable de entrada es 1</h1>`]
    ],
    // opción por defecto
    () => html`<h1>Error</h1>`)}
    `;
  }
}
 
 declare global {
   interface HTMLElementTagNameMap {
     'mis-condiciones': MisCondiciones;
   }
 }
 
 