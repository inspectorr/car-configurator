import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBG3zSt7jaTzudTfdZuechsrt0pheoEOx0",
    authDomain: "car-configurator-c1118.firebaseapp.com",
    databaseURL: "https://car-configurator-c1118.firebaseio.com",
    projectId: "car-configurator-c1118",
    storageBucket: "car-configurator-c1118.appspot.com",
    messagingSenderId: "565004875170"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
