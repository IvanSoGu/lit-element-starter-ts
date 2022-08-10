/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property, state} from 'lit/decorators.js';
 import {when} from "lit/directives/when.js";
 import {Login} from './Login';
 import {z} from "zod"
 
 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('formulario-login')
 export class FormularioLogin extends LitElement {
   static override styles = css`
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
 
   @property({type: Object})
   login: Login = new Login();
 
   mySchema = z.object({
     name: z.string().min(1, { message: "No puede estar vacío" }),
     password: z.string().min(8, { message: "Debe tener al menos 8 caracteres" })
   })
 
   @state()
     validation: any = {
     success: true,
     error: {
     issues: [],
     format : () => {}
     }
   };
 
   @state()
   myError = new z.ZodError([]);
 
   onSubmit(e:Event){
     e.preventDefault();
     console.log(this.login);
     console.log(this.login.name);
     this.validation = this.mySchema.safeParse(this.login)
     console.log(this.validation)
     console.log(this.validation.success)
     if (!this.validation.success){
     console.log("no valida")
     console.log(this.validation.error.issues)
     console.log(this.validation.error.format())
     }
   }
    
   override render() {
     return html`
       <h1>Form01</h1>
       <form @submit="${this.onSubmit}">
         <div>
           <label for="name">Nombre</label>
           <input
             id="name"
             type="text"
             name="name"
             value="${this.login.name}"
             @input=${(e: Event) => {
               const target = e.target as HTMLInputElement;
               console.log(target.value);
               this.login.name = target.value;
               console.log(this.login.name)
             }
             }
           />
         </div>
         <div>
           <label for="password">Contraseña</label>
           <input id="password" type="password" name="password" value="${this.login.password}" 
           @input=${(e: Event) => {
             const target = e.target as HTMLInputElement;
             console.log(target.value);
             this.login.password= target.value;
             console.log(this.login.password)
           }}/>
         </div>
         ${when(
           !this.validation.success && this.validation.error.format().password!=undefined,
           () => html`
           <div class="input-error" id="error-password">
           <span >${this.validation.error.format().password._errors}</span>
           </div>
           `,
           () => html``)}
         <div>
           <input type="submit" value="Enviar" />
         </div>
       </form>
       <slot></slot>
     `;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'formulario-login': FormularioLogin;
   }
 }
 