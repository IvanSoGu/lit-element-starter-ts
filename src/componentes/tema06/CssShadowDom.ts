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
 @customElement('css-shadow-dom')
 export class CssShadowDom extends LitElement {
   static override styles = css`
     :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
        color:green;
     }
     :host(.red) {
        color: red;
     }
   `;
 
   /**
    * Propiedad de tipo String que maneja el dato a presentar
    */
 
    override render() {
    return html`
    <p> I am green =D </p>
    `;
    }
}
 
 declare global {
   interface HTMLElementTagNameMap {
     'css-shadow-dom': CssShadowDom;
   }
 }
 
 