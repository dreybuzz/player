import { useFonts } from "@expo-google-fonts/ubuntu"
import { APP_FONTS } from "./src/utils/fonts"
import { useCallback, useEffect, useState } from "react"
import * as SplashScreen from "expo-splash-screen"
import { store } from "./src/redux/store"
import { Provider } from "react-redux"
import EntryPoint from "./src/navigators/EntryPoint/EntryPoint"
import AppText from "./src/components/AppText/AppText"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts(APP_FONTS.Ubuntu)

  const [appIsReady, setAppIsReady] = useState(false)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
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

  return (
    <Provider store={store}>
      {/* <EntryPoint onLayout={onLayoutRootView} /> */}
      <AppText>Hello World</AppText>
    </Provider>
  )
}
