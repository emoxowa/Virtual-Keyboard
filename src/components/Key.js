import keyText from '../utils/keyText';

class Key {
  constructor(keyCode) {
    this.keyCode = keyCode;
    this.isPressed = false;
    this.element = document.createElement('div');
    this.element.classList.add('key');
    this.element.textContent = keyText[keyCode] || String.fromCharCode(keyCode);
  }

  press() {
    this.isPressed = true;
    this.element.classList.add('key--pressed');
  }

  release() {
    this.isPressed = false;
    this.element.classList.remove('key--pressed');
  }
}

export default Key;
