/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property, state} from 'lit/decorators.js';
 
 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('ejercicios-propiedades')
 export class EjerciciosPropiedades extends LitElement {
   static override styles = css`
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;

   @property({
    type: String
   })
   valor="Valor inicial"

   @state()
    protected _contador = 0;
   
    override render() {
        return html`
            <h1>Ejercicio tema 4</h1>
            <h2>${this.valor}</h2>
            <h2>${this._contador}</h2>
            <slot></slot>
        `;
    }
}
 
 declare global {
   interface HTMLElementTagNameMap {
     'ejercicios-propiedades': EjerciciosPropiedades;
   }
 }