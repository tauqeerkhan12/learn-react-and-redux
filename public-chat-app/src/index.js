import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import fbconfig from './config/fbconfig'
import registerServiceWorker from './registerServiceWorker';
//material ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
