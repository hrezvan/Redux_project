import configureStore from './store/configureStore';
// import * as actions from './store/bugs';
// import { projectAdded } from './store/projects';
import * as actions from './store/api';

const store = configureStore();

store.dispatch(actions.apiCallBegan({
    url: '/bugs',
    onSuccess: 'bugsRecieved',
}))

store.subscribe(() => {
    console.log('state changed!')
});

// store.dispatch(projectAdded({name: 'project 1'}));
// store.dispatch(actions.bugAdded({description: 'Bug 1'}));
// store.dispatch(actions.bugAdded({description: 'Bug 2'}));
// store.dispatch(actions.bugAdded({description: 'Bug 3'}));
// store.dispatch(actions.bugResolved({id: 1}));

console.log(store.getState());