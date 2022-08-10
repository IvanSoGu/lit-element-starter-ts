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
 @customElement('definicion-css')
 export class DefinicionCSS extends LitElement {
    private color?: string;

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
        this.color = this.classList.contains("green")
        ? "green"
        : "pink";
        return html`
        <style>
        div {
        color: ${this.color};
        }
        </style>
        <div>Un elemento con estilazo.</div>
        `;
        }
}
 
 declare global {
   interface HTMLElementTagNameMap {
     'definicion-css': DefinicionCSS;
   }
 }
 
 