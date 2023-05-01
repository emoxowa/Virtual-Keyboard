import keyText from '../utils/keyText';

class Key {
  constructor(keyCode, isFnKey = false) {
    this.keyCode = keyCode;
    this.isFnKey = isFnKey;
    this.isPressed = false;
    this.element = document.createElement('div');
    this.element.classList.add('key');
    this.element.textContent = keyText[keyCode] || String.fromCharCode(keyCode);
    if (isFnKey) {
      this.element.classList.add('fn-key');
    }
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
