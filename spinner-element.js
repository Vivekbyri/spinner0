import 'https://cdnjs.cloudflare.com/ajax/libs/polymer/0.5.6/polymer.min.js';
import {html, PolymerElement} from "https://unpkg.com/@polymer/polymer@latest/polymer-element.js?module";
import 'https://cdn.jsdelivr.net/npm/@polymer/paper-spinner@3.0.2/paper-spinner.min.js';

/**
 * `spinner-element`
 * To display a loader
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SpinnerElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-spinner active></paper-spinner>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'spinner-element',
      },
    };
  }
}

window.customElements.define('spinner-element', SpinnerElement);
