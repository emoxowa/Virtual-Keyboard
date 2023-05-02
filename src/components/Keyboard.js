import Key from './Key';
import keysLayout from '../utils/keysLayout';

class Keyboard {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('keyboard');
    this.keys = [];

    this.initKeys();
  }

  initKeys() {
    keysLayout.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('keyboard__row');
      row.forEach((key) => {
        const keyElement = document.createElement('div');
        const keyObject = new Key(key, keyElement);
        keyElement.addEventListener('click', () => {
          this.updateInputCallback(keyObject.element.textContent);
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
