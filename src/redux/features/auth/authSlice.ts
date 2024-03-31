import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Appearance, ColorSchemeName } from "react-native"
import { styleGuide } from "../../../utils/styleGuide"

interface AuthState {
  accessToken: string | null
}

const initialState: AuthState = {
  accessToken: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
  },
})

export const { setAccessToken } = authSlice.actions

export default authSlice.reducer
