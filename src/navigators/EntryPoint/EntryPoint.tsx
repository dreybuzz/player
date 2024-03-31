import { View, ViewProps } from "react-native"
import { useAppSelector } from "../../redux/hooks"
import { router } from "expo-router"
import AppText from "../../components/AppText/AppText"

type EntryPointProps = ViewProps & {}
export default function EntryPoint({ onLayout }: EntryPointProps) {
  const themeColors = useAppSelector((state) => state.theme.themeColors)
  const accessToken = useAppSelector((state) => state.auth.accessToken)

  console.log(accessToken)

  return (
    <View
      onLayout={(e) => {
        onLayout?.(e)
        console.log("Here")
        router.navigate(accessToken ? "login" : "register")
      }}>
      <AppText>Hello World</AppText>
    </View>
  )
}
