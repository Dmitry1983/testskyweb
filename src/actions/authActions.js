import { SIGNIN, SIGNOUT } from '../types/index'

// -  NAMES ACTION CREATERS
export const changeSignIn = () => ({
  type: SIGNIN,
})

export const changeSignOut = () => ({
  type: SIGNOUT,
})
