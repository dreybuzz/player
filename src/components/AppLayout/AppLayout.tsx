import { View, StyleSheet } from "react-native"
import React from "react"
import { useAppSelector } from "../../redux/hooks"
import { useSafeAreaInsets } from "react-native-safe-area-context"

type AppLayoutProps = {
  children: React.ReactNode
}
export default function AppLayout({ children }: AppLayoutProps) {
  const themeColors = useAppSelector((state) => state.theme.themeColors)
  const paddingTop = useSafeAreaInsets().top
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: themeColors.primary,
          paddingTop,
        },
      ]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
