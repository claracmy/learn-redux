//Reducer to handle actions. One reducer for each piece of state.
// Every reducer runs every time an action happens, therefore some logic is needed to specify which reducer does what during the dispatch of an action
//A reducer takes in two things:
// 1. the action (info about what happened)
// 2. a copy of current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
