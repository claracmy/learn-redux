// App.js infuses the functions/reducers to the presentational Main.js
import { bindActionCreators } from 'redux';
//connect allows props to be injected to the level of component instead of having to pass them down one by one.
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

//Call Main right after to import all the props and data from state/dispatch to props
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
