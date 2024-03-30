import { PREDEF_RES, create } from "./resolutions"

export const ps = create(PREDEF_RES.iphone13ProMax.px)

export const styleGuide = {
  colors: {
    light: {
      accent: "#00A9FF",
      primary: "#F5F5F5",
      secondary: "#89CFF3",
      tertiary: "#A0E9FF",
      neutral: "#CDF5FD",
      text: "#000000",
    },

    dark: {
      accent: "#070F2B",
      primary: "#121212",
      secondary: "#1B1A55",
      tertiary: "#535C91",
      neutral: "#9290C3",
      text: "#FFFFFF",
    },
  },

  sizes: {
    xxs: ps(2),
    xs: ps(4),
    sm: ps(6),
    md: ps(8),
    base: ps(10),
    lg: ps(12),
    xl: ps(14),
    xxl: ps(16),
    xxxl: ps(20),
  },
}
