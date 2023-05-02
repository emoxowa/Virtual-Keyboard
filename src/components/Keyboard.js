import Key from './Key';
import keysLayout from '../utils/keysLayout';
import fnKeys from '../utils/fnKeys';

class Keyboard {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('keyboard');
    this.keys = [];
    this.isCapsLockPressed = false;
    this.initKeys();
  }

  static isFunctionalKey(keyText) {
    return fnKeys.includes(keyText);
  }

  initKeys() {
    keysLayout.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('keyboard__row');
      row.forEach((key) => {
        const keyElement = document.createElement('div');
        const keyObject = new Key(key, keyElement);

        keyElement.addEventListener('click', () => {
          const keyTextContent = keyObject.element.textContent;
          if (keyTextContent === 'Backspace') {
            this.updateInputCallback(null, true, false);
          } else if (keyTextContent === 'Del') {
            this.updateInputCallback(null, false, true);
          } else if (!Keyboard.isFunctionalKey(keyTextContent)) {
            this.updateInputCallback(keyTextContent, false, false);
          }
        });

        this.keys.push(keyObject);

        keyElement.appendChild(keyObject.element);
        rowElement.appendChild(keyElement);
      });
      this.element.appendChild(rowElement);
    });
  }

  render(parentElement, updateInputCallback) {
    this.updateInputCallback = updateInputCallback;
    parentElement.appendChild(this.element);
  }
}

export default Keyboard;
