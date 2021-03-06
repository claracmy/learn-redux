import React from 'react'; //from node modules
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';

//Import CSS
import css from './styles/style.styl'; //no need to link in html. Webpack does it.

//Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//Import router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Allows redux to be used with react
import { Provider } from 'react-redux';
import store, { history } from './store';


//Render either PhotoGrid or Single, both a children of the Main.
//BrowserHistory allows back button to be used -- replaced by history
//Index route is / and nested route is one level deeper
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
