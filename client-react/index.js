import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import FileUpload from './components/FileUpload/index';
import * as serviceWorker from './serviceWorker';

const component = (
  <FileUpload />
);
const appDiv = document.getElementById('root');

ReactDOM.render(component, appDiv);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
