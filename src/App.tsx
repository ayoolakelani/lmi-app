import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss';
import App from './components/app-component';

ReactDOM.render(<App name="Foo Bar" />, document.getElementById('app'));
