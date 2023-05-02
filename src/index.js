import './styles/index.css';
import App from './components/App';

const body = document.querySelector('body');
body.classList.add('container');

const app = new App();
app.init();
app.render(document.body);
