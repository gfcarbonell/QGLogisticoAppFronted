var stateInitital = { 
    user: {}, 
    loading:true,
    authenticated:false,
    error: {}
};

const authenticateReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_REQUEST':
            return state;
        case 'FETCH_LOGIN':
            return {
                user:action.user, 
                loading:true,
                authenticated:action.authenticated,
                error:null
            };
        case 'FETCH_LOGOUT':
            return state;
        case 'FETCH_ERROR':
            return {
                    user: null,
                    error: action.error,
                    authenticated:false,
                    loading:false
                };
        default:
            return state;
    }
}
export default authenticateReducer;