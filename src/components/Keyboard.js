import Key from './Key';

class Keyboard {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('keyboard');
    this.keys = [];
    this.initKeys();
  }

  initKeys() {
    const keysLayout = [
      [
        'Tilda',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '+',
        'Backspace',
      ],
      [
        'Tab',
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        '[',
        ']',
        'BackSlash',
        'Del',
      ],
      [
        'CapsLock',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'Semicolon',
        'Quote',
        'Enter',
      ],
      [
        'Shift',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        ',',
        '.',
        '/',
        'ArrowUp',
        'ShiftRight',
      ],
      [
        'Ctrl',
        'Win',
        'Alt',
        'Space',
        'AltRight',
        'ArrowLeft',
        'ArrowDown',
        'ArrowRight',
        'CtrlRight',
      ],
    ];

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

  render(parentElement) {
    parentElement.appendChild(this.element);
  }
}

export default Keyboard;
