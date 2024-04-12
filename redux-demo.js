const redux = require('redux');

const counterReducer = (state ={counter: 0}, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter - 1
        }
    }
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestSate = store.getState();
    console.log(latestSate);
}


store.subscribe(counterSubscriber);

store.dispatch({type:'increment'}); //is a method which dispatches an action
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});