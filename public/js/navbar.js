import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {HashRouter,Route} from 'react-router-dom'
import promise from 'redux-promise'
import reducer from './reducers/navbar_reducer'
import Sm from './containers/navbar'
import Echar from './components/Echarts'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-grid/dist/grid.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '../css/charts.css'
import '../css/navbar.css'

/*const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);*/
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={Sm}/>
                <Route path="/echarts" component={Echar}/>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('navbar')
);

