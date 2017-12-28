import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import  reducer from'./reducers/navbar_reducer'
import Sm from './containers/navbar'
require("../css/navbar.css");

/*const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);*/
const  store = createStore(
    reducer,
    applyMiddleware(thunk)
)

render(
    <Provider store={store}>
        <Sm/>
    </Provider>,
    document.getElementById('navbar')
);
