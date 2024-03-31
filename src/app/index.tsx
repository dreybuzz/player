import { Pressable, View, ViewProps } from "react-native"
import React, { useCallback, useEffect, useState } from "react"
import AppText from "../components/AppText/AppText"
import { useAppSelector } from "../redux/hooks"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { Link, router } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"
import { APP_FONTS } from "../utils/fonts"

export default function Page() {
  const [fontsLoaded, fontError] = useFonts(APP_FONTS.Ubuntu)

  const [appIsReady, setAppIsReady] = useState(false)

  const accessToken = useAppSelector((state) => state.auth.accessToken)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
      router.navigate(accessToken ? "/matchdays" : "/auth")
    }
  }, [fontsLoaded, fontError])

  useEffect(() => {
    if (!fontsLoaded || fontError) return
    setTimeout(async () => {
      setAppIsReady(true)
    }, 2000)
  }, [fontsLoaded, fontError])

  if (!appIsReady) {
    return null
  }

  return <View onLayout={onLayoutRootView}></View>
}
