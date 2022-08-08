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
 @customElement('mis-propiedades')
 export class MisPropiedades extends LitElement {
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
   @property()
   name = 'World';

   @property({
    type: String
   })
   cadena="Valor inicial"
 
   @property({
    type: Number
   })
   numero=3
   

   override render() {
     return html`
       <h1>Mis propiedades</h1>
        <h2>${this.name}</h2>
        <h3>${this.numero}</h3>
       <slot></slot>
     `;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'mis-propiedades': MisPropiedades;
   }
 }
 