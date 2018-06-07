var stateInitital = { 
    user: {}, 
    loading:true,
    isAuthenticated:false,
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
                isAuthenticated:action.isAuthenticated,
                error:null
            };
        case 'FETCH_LOGOUT':
            return state;
        case 'FETCH_ERROR':
            return {
                    user: null,
                    error: action.error,
                    isAuthenticated:false,
                    loading:false
                };
        default:
            return state;
    }
}
export default authenticateReducer;