import { View, Text, TextProps, StyleSheet } from "react-native"
import React from "react"
import { useAppSelector } from "../../redux/hooks"

type AppTextProps = TextProps & {
  weight?: 300 | 400 | 500 | 700
  italics?: boolean
  text?: string | number
}

export default function AppText({
  children,
  style,
  text,
  weight,
}: AppTextProps) {
  const fontFamily = getFont(weight)

  const themeColors = useAppSelector((state) => state.theme.themeColors)

  return (
    <Text
      style={[
        styles.text,
        {
          fontFamily,
          color: themeColors.text,
        },
        style,
      ]}>
      {text ?? children}
    </Text>
  )
}

const getFont = (weight: AppTextProps["weight"], italic: boolean = false) => {
  switch (weight) {
    case 300:
      return italic ? "Ubuntu_300Light_Italic" : "Ubuntu_300Light"
    case 400:
      return italic ? "Ubuntu_400Regular_Italic" : "Ubuntu_400Regular"
    case 500:
      return italic ? "Ubuntu_500Medium_Italic" : "Ubuntu_500Medium"
    case 700:
      return italic ? "Ubuntu_700Bold_Italic" : "Ubuntu_700Bold"
    default:
      return italic ? "Ubuntu_400Regular_Italic" : "Ubuntu_400Regular"
  }
}

const styles = StyleSheet.create({
  text: {},
})
