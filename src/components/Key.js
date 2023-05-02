import keyText from '../utils/keyText';

class Key {
  constructor(keyCode, keyElement) {
    this.keyCode = keyCode;
    this.keyElement = keyElement;
    this.element = document.createElement('div');
    this.element.classList.add('key__text');
    this.keyElement.classList.add('key');
    this.element.textContent = keyText[keyCode] || String.fromCharCode(keyCode);
    this.isUpperCase = false;

    if (['Space'].includes(keyCode)) {
      this.keyElement.classList.add('key--wide--360');
    }
    if (['CapsLock', 'Backspace', 'Shift'].includes(keyCode)) {
      this.keyElement.classList.add('key--wide--110');
    }
    if (['Tab'].includes(keyCode)) {
      this.keyElement.classList.add('key--wide--60');
    }
    if (['Enter', 'ShiftRight'].includes(keyCode)) {
      this.keyElement.classList.add('key--wide--90');
    }

    this.keyElement.addEventListener('mousedown', () => {
      this.keyElement.classList.add('key--pressed');
      this.element.classList.add('key__text--white');
    });

    this.keyElement.addEventListener('mouseup', () => {
      this.keyElement.classList.remove('key--pressed');
      this.element.classList.remove('key__text--white');
    });
  }

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
    this.updateTextContent();
  }

  updateTextContent() {
    this.element.textContent = this.isUpperCase
      ? keyText[this.keyCode].toUpperCase()
      : keyText[this.keyCode].toLowerCase();
  }
}

export default Key;
