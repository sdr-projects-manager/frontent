import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IProps {
  token: string
}

export const initialState: IProps = { token: '' }

const authorisationSlice = createSlice({
  name: 'authorisation',
  initialState,
  reducers: {
    setToken(state: IProps, action: PayloadAction<{ token: string }>) {
      const { token } = action.payload
      state.token = token
      localStorage.setItem('token', token)
    },
    logout(state: IProps) {
      state.token = ''
      localStorage.removeItem('token')
    }
  }
})

export const { setToken, logout } = authorisationSlice.actions
export default authorisationSlice.reducer
