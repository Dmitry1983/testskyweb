import { SIGNIN, SIGNOUT } from '../types/index'

const initialState = {
  sign: false,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        sign: true,
      }
    case SIGNOUT:
      return {
        ...state,
        sign: false,
      }
    default:
      return state
  }
}
