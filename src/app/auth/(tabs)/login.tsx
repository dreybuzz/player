import { View, StyleSheet } from "react-native"
import React from "react"
import AppText from "../../../components/AppText/AppText"
import { ps, styleGuide } from "../../../utils/styleGuide"
import AppInput from "../../../components/AppInput/AppInput"
import AppButton from "../../../components/AppButton/AppButton"
import { router } from "expo-router"

export default function Page() {
  const login = () => {
    router.navigate("main/matchdays")
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <AppText weight={700} size={ps(28)}>
          Login
        </AppText>
      </View>

      {/* Inputs */}
      <View style={styles.inputsContainer}>
        <AppInput placeholder="Username" />
        <AppInput placeholder="Password" secureTextEntry />
      </View>

      {/* Button */}
      <AppButton style={styles.buttonContainer} onPress={login}>
        Login
      </AppButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: styleGuide.sizes.xxxl,
  },

  titleContainer: {
    marginTop: styleGuide.sizes.xl * 2,
  },

  inputsContainer: {
    marginTop: styleGuide.sizes.xl * 6,
    rowGap: styleGuide.sizes.xxxl * 1.5,
  },

  buttonContainer: {
    marginTop: styleGuide.sizes.xxxl * 2,
  },
})
