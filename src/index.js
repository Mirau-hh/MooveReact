import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//Import de router
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Components
import Films from './components/film'
import Home from './components/home'

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Import de components

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route path = "/film/:id" component = {Films}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
