import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// import '@polymer/paper-spinner/paper-spinner.js';

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
      <center>
        <paper-spinner active></paper-spinner>
      </center>
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
