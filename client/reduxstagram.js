import React from 'react'; //from node modules
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';

//Import CSS
import css from './styles/style.styl'; //no need to link in html. Webpack does it.

//Import Components
import Main from './components/main';


ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// OR render(<Main/>, document.getElementById('root'));
