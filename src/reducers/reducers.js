import {combineReducers} from 'redux'
import {
    GET_TAG,
    GET_TARGET_X,
} from '../actions/actions'

const tag = (state = [], action) => {
    switch (action.type) {
        case GET_TAG:
          return action.tag
        default:
          return null
    }
}

const targetX = (state = [], action) => {
    switch (action.type) {
        case GET_TARGET_X:
          return action.targetX
        default:
          return null
    }
}

export default combineReducers({
    tag,
    targetX,
})