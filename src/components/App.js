import {
  getLanguage,
} from './Languages';
import InputField from './InputField';
import Keyboard from './Keyboard';

class App {
  constructor() {
    this.appElement = document.createElement('div');
    this.appElement.setAttribute('id', 'app');
    this.inputField = new InputField();
    this.keyboard = new Keyboard();
    this.state = {
      currentLanguage: getLanguage(),
      input: '',
    };
  }

  init() {
    this.inputField.render(this.appElement);
    this.keyboard.render(this.appElement, (char, isBackspace, isDelete) => {
      if (isBackspace) {
        this.state.input = this.state.input.slice(0, -1);
      } else if (isDelete) {
        this.state.input = '';
      } else {
        this.state.input += char;
      }
      this.inputField.setValue(this.state.input);
    });
  }

  render(parentElement) {
    parentElement.appendChild(this.appElement);
  }
}

export default App;
