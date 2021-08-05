import * as types from '../action-types';

export function setLoading(flag) {
    return async(dispatch) => {
        dispatch({ type: types.SET_LOADING, loading: flag });
    };
}

export function setUser(user) {
    return async(dispatch) => {
        dispatch({ type: types.SET_USER, user });
    }
}