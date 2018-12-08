/* global document */
export default class CarSeatJungleForm {
  constructor(anchor) {
    this.anchor = anchor;
    this.document = document;
  }

  // build form
  createForm() {
    this.form = this.document.createElement('form');

    return this;
  }

  // build each form element
  createFormInput() {
    const input = this.document.createElement('input');
    input.type = 'text';

    return input;
  }

  // createFormSelect() {
  //   return this;
  // }

  createFormButton() {
    const button = this.document.createElement('input');
    button.type = 'submit';
    button.label = 'Submit';

    return button;
  }
}
