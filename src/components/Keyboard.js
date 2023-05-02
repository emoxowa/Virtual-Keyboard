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

  toggleCapsLock() {
    this.isCapsLockPressed = !this.isCapsLockPressed;
    this.keys.forEach((key) => {
      if (!Keyboard.isFunctionalKey(key.element.textContent)) {
        // eslint-disable-next-line no-param-reassign
        key.element.textContent = this.isCapsLockPressed
          ? key.element.textContent.toUpperCase()
          : key.element.textContent.toLowerCase();
      }
    });
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
          } else if (keyTextContent === 'Caps Lock') {
            keyElement.classList.toggle('keyboard__key--pressed');
            this.toggleCapsLock();
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
