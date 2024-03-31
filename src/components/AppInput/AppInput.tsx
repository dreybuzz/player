import { View, Text, TextInputProps, TextInput, StyleSheet } from "react-native"
import React from "react"
import { useAppSelector } from "../../redux/hooks"
import { styleGuide } from "../../utils/styleGuide"

type AppInputProps = TextInputProps & {}
export default function AppInput({ placeholder, style }: AppInputProps) {
  const themeColors = useAppSelector((state) => state.theme.themeColors)
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={themeColors.text}
      style={[
        styles.container,
        { backgroundColor: themeColors.neutral, color: themeColors.text },
        style,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: styleGuide.sizes.xxxl,
    padding: styleGuide.sizes.xxxl,
  },
})
