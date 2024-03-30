import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Appearance, ColorSchemeName } from "react-native"
import { styleGuide } from "../../../utils/styleGuide"

interface ThemeState {
  colorScheme: ColorSchemeName
  themeColors: typeof styleGuide.colors.dark
}

const initialState: ThemeState = (() => {
  const colorScheme = Appearance.getColorScheme()
  return {
    colorScheme,
    themeColors: styleGuide.colors[colorScheme ?? "dark"],
  }
})()

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setColorScheme(state, action: PayloadAction<ColorSchemeName>) {
      state.colorScheme = action.payload
    },
  },
})

export const { setColorScheme } = themeSlice.actions

export default themeSlice.reducer
