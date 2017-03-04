import {combineReducers} from 'redux'
import * as reducers from './reducers'
import {SAVE_CREDENTIALS} from './actions'

const defaultCredentials = 
{username: 'jono', password: 'ewardo'}


export function credentials(state = defaultCredentials, action) {
    switch (action.type) {
        case SAVE_CREDENTIALS:
            return {...state, username: action.username, password: action.password}

        default:
            return state
    }
}

const linkageApp = combineReducers(reducers)

export default linkageApp