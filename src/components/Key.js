import keyText from '../utils/keyText';

class Key {
  constructor(keyCode) {
    this.keyCode = keyCode;
    this.element = document.createElement('div');
    this.element.classList.add('key');
    this.element.textContent = keyText[keyCode] || String.fromCharCode(keyCode);
  }
}

export default Key;
