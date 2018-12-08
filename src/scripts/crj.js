/* global document */
export default class CarSeatJungle {
  constructor(anchor) {
    this.anchor = anchor;
    this.document = document;
  }

  // build form
  buildForm() {
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

  // load data from AirTable with filters applied
  loadData() {
    return this;
  }

  // build table with results
  buildResults() {
    return this;
  }
}
