import { USERNAME, PASSWORD } from '../types/index'

// -  NAMES ACTION CREATERS
export const changeUsername = (i) => ({
  type: USERNAME,
  payload: i,
})

export const changePassword = (i) => ({
  type: PASSWORD,
  payload: i,
})
