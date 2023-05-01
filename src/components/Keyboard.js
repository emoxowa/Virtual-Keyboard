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
        keyElement.classList.add('keyboard__key');
        const keyObject = new Key(key);
        this.keys.push(keyObject);

        keyElement.addEventListener('mousedown', () => {
          keyElement.classList.add('keyboard__key--pressed');
          this.updateInputCallback(keyObject.element.textContent);
        });
        keyElement.addEventListener('mouseup', () => {
          keyElement.classList.remove('keyboard__key--pressed');
        });

        keyElement.appendChild(keyObject.element);
        rowElement.appendChild(keyElement);

        if (key === 'Space') {
          keyElement.classList.add('keyboard__key--space');
          keyElement.textContent = '';
        }
        if (['CapsLock', 'Backspace', 'Shift'].includes(key)) {
          keyElement.classList.add('keyboard__key--backspace');
        }
        if (['Tab'].includes(key)) {
          keyElement.classList.add('keyboard__key--tab');
        }
        if (['Enter', 'ShiftRight'].includes(key)) {
          keyElement.classList.add('keyboard__key--enter');
        }
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
