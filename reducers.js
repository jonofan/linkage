import {combineReducers} from 'redux'
import * as reducers from 'reducers'
import {SAVE_CREDENTIALS, LOGOUT} from 'actions'

const defaultAuthentication = {
    credentials: {},
    isLoggedIn: false
}


export function authentication(state = defaultAuthentication, action) {
    switch (action.type) {
        case SAVE_CREDENTIALS:
            return {...state, credentials: action.credentials, isLoggedIn: true}

        case LOGOUT:
            return defaultAuthentication
        default:
            return state
    }
}

const linkageApp = combineReducers(reducers)

export default linkageApp