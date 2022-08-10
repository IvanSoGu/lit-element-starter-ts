/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {when} from "lit/directives/when.js";
import {Animal} from './Animal';
import {z} from "zod"

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mi-formulario')
export class MiFormulario extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property({type: Object})
  animal: Animal = new Animal();

  mySchema = z.object({
    name: z.string().min(1, { message: "No puede estar vacío" }),
    age: z.number().gt(0, {message: "Debe ser al menos 1"})
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
    console.log(this.animal);
    console.log(this.animal.name);
    this.validation = this.mySchema.safeParse(this.animal)
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
            value="${this.animal.name}"
            @input=${(e: Event) => {
              const target = e.target as HTMLInputElement;
              console.log(target.value);
              this.animal.name = target.value;
              console.log(this.animal.name)
            }
            }
          />
        </div>
        <div>
          <label for="age">Edad</label>
          <input id="age" type="number" name="age" value="${this.animal.age}" 
          @input=${(e: Event) => {
            const target = e.target as HTMLInputElement;
            console.log(target.value);
            this.animal.age= +target.value;
            console.log(this.animal.age)
          }}/>
        </div>
        ${when(
          !this.validation.success && this.validation.error.format().age!=undefined,
          () => html`
          <div class="input-error" id="error-age">
          <span >${this.validation.error.format().age._errors}</span>
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
    'mi-formulario': MiFormulario;
  }
}
