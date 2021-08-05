import * as types from '../action-types';

const initialState = {
    loading: false,
    user: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.SET_LOADING:
            return {
                ...state,
                loading: action.flag,
            };
        case types.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}