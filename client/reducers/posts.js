//Reducer to handle actions. One reducer for each piece of state.
// Every reducer runs every time an action happens, therefore some logic is needed to specify which reducer does what during the dispatch of an action
//A reducer takes in two things:
// 1. the action (info about what happened)
// 2. a copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
     console.log('incrementing likes!');
     const i = action.index;
     return [
       ...state.slice(0, i), //before the one we're updating
       {...state[i], likes: state[i].likes + 1 },
       ...state.slice(i + 1) //after the one we're updating
     ]
    default:
      return state;
  }
  return state;
}

export default posts;
