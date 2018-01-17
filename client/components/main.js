import React from 'react';
import { Link } from 'react-router';


//OR  const Main = React.createClass({})
class Main extends React.Component {
  render() {
    return(
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    )
  }
};

export default Main;
