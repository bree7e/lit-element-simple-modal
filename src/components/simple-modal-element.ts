/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import { LitElement, html, customElement, property } from 'lit-element';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <tyapk-modal> as an HTML tag.
 */
@customElement('tyapk-modal')
export class TyapkModalElement extends LitElement {
  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  header = 'header';

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <p>${this.header}</p>
    `;
  }
}
