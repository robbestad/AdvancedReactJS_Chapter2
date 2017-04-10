const createStore = require('redux').createStore;

const reducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case "INCREMENT": 
      return Object.assign(
      	{}, 
      	state, 
      	{count: state.count + action.payload}
      );
    default: 
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

setInterval(() => store.dispatch({ type: 'INCREMENT', payload: 1 }), 1000);

console.log("GO!")

