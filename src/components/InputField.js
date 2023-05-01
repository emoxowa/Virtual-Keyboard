class InputField {
  constructor() {
    this.inputElement = document.createElement('input');
    this.inputElement.setAttribute('type', 'text');
    this.inputElement.setAttribute('placeholder', 'Введите текст...');
    this.inputElement.classList.add('input-field');
  }

  getValue() {
    return this.inputElement.value;
  }

  setValue(value) {
    this.inputElement.value = value;
  }

  render(parentElement) {
    parentElement.appendChild(this.inputElement);
  }
}

export default InputField;
