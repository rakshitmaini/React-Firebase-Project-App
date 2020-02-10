const initState = {
    projects: [
        {id: '1', title: 'helop mekrla aksjd', content: 'lorem ipsumaldfslkajlkdjslkfjlka'},
        {id: '2', title: 'hello world', content: 'lorem this is me'},
        {id: '3', title: 'lets go for', content: 'lorem lets go for fun'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('project created',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;