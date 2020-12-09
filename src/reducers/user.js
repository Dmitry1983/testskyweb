import { USERNAME, PASSWORD } from '../types/index'

const initialState = {
  username: 'test',
  password: 'test',
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case USERNAME:
      return {
        ...state,
        username: action.payload,
      }
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    default:
      return state
  }
}
