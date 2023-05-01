import InputField from './InputField';

class App {
  constructor() {
    this.appElement = document.createElement('div');
    this.appElement.setAttribute('id', 'app');
  }

  init() {
    const inputField = new InputField();
    inputField.render(this.appElement);
  }

  render(parentElement) {
    parentElement.appendChild(this.appElement);
  }
}

export default App;
