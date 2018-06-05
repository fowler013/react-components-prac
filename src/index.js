import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Comment from './components/Comment';

ReactDOM.render(<Comment author={{name: 'Tevin', avatarUrl: 'https://i.ytimg.com/vi/NiEABxi8G4U/maxresdefault.jpg' }} text= 'this is my test rum using Component in React' />, document.getElementById('root'));
registerServiceWorker();
