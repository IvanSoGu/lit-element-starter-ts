/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {customElement} from 'lit/decorators.js';
 import { ComponenteMadre } from './Madre';

 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('componente-hija')
 export class ComponenteHija extends ComponenteMadre {
 
   /**
    * Propiedad de tipo String que maneja el dato a presentar
    */

}
 
 declare global {
   interface HTMLElementTagNameMap {
     'componente-hija': ComponenteHija;
   }
 }
 
 