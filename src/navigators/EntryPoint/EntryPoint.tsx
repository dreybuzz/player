import { View, ViewProps } from "react-native"
import React from "react"
import AppText from "../../components/AppText/AppText"
import { useAppSelector } from "../../redux/hooks"

type EntryPointProps = ViewProps & {}
export default function EntryPoint({ onLayout }: EntryPointProps) {
  const themeColors = useAppSelector((state) => state.theme.themeColors)

  return (
    <View onLayout={onLayout}>
      <AppText>Player</AppText>
    </View>
  )
}
