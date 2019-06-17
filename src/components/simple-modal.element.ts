/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import {
  css,
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
  CSSResult,
} from 'lit-element';

import { tyapkModalStyles } from './simple-modal.styles';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <tyapk-modal> as an HTML tag.
 */
@customElement('tyapk-modal')
export class TyapkModalElement extends LitElement {
  static get styles(): CSSResult {
    return tyapkModalStyles();
  }

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  header = '';

  @property()
  show = false;

  private _close(detail: string): void {
    // Fire a custom event for others to listen to
    this.dispatchEvent(new CustomEvent('close', { detail }));
  }

  open(): void {
    this.show = true;
  }

  handleClick(): void {
    this.show = false;
    this._close('ok');
  }

  closeModal(result: string): void {
    this.show = false;
    this._close(result);
  }

  /**
   * Implement `render` to define a template for your element.
   */
  render(): TemplateResult {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      ${this.show
        ? html`
            <div class="dialog">
              <div class="dialog__content">
                <header>
                  <h2>${this.header}</h2>
                </header>
                <main>
                  <slot></slot>
                </main>
                <footer>
                  <button
                    class="dialog__ok-btn"
                    @click="${() => this.handleClick()}"
                  >
                    OK
                  </button>
                  <button
                    class="dialog__cancel-btn"
                    @click="${() => this.closeModal('cancel')}"
                  >
                    Отмена
                  </button>
                </footer>
                <div
                  class="dialog__close-btn"
                  @click="${() => this.closeModal('close')}"
                ></div>
              </div>
            </div>
            <div class="overlay"></div>
          `
        : ''}
    `;
  }
}
