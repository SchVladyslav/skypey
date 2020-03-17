import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
//import registerServiceWorker from 'registerServiceWorker';

import store from './store';

const render = () => {
    //fancyLog();
    ReactDOM.render(<App />, document.getElementById('root'));
}

render();
store.subscribe(render);
//registerServiceWorker();

function fancyLog() {
     console.log("%c Rendered with 👉 👉 👇 ", "background: purple; color: #fff"); 
     console.log(store.getState()); 
}

//              ***Redux***
// function createStore(reducer, initialState) {
//     let state = initialState
//     return {
//         dispatch: action => { state = reducer(state, action) },
//         getState: () => state,
//     }
// }