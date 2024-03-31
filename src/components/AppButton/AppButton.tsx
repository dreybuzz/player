import {
  Text,
  StyleSheet,
  Pressable,
  PressableProps,
  ViewStyle,
} from "react-native"
import React from "react"
import AppText from "../AppText/AppText"
import { useAppSelector } from "../../redux/hooks"
import { styleGuide } from "../../utils/styleGuide"

type AppButtonProps = PressableProps & {
  children?: string | number
  style?: ViewStyle
  textColor?: string
  shadow?: boolean
}
export default function AppButton({
  children,
  style,
  textColor,
  onPress,
  shadow = true,
}: AppButtonProps) {
  const themeColors = useAppSelector((state) => state.theme.themeColors)
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: themeColors.accent },
        shadow ? styleGuide.globalStyles.shadow : undefined,
        style,
      ]}>
      <AppText color={textColor} size={styleGuide.sizes.xxl}>
        {children}
      </AppText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: styleGuide.sizes.xxxl,
    paddingHorizontal: styleGuide.sizes.xxxl * 1.5,
    borderRadius: styleGuide.sizes.xxl,
  },
})
