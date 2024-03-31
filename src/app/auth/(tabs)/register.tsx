import { View, Text, StyleSheet } from "react-native"
import React from "react"
import AppText from "../../../components/AppText/AppText"
import { ps, styleGuide } from "../../../utils/styleGuide"
import AppInput from "../../../components/AppInput/AppInput"
import AppButton from "../../../components/AppButton/AppButton"

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <AppText weight={700} size={ps(28)}>
          Create New Account
        </AppText>
      </View>

      {/* Inputs */}
      <View style={styles.inputsContainer}>
        <AppInput placeholder="Username" />
        <AppInput placeholder="Password" secureTextEntry />
      </View>

      {/* Button */}
      <AppButton style={styles.buttonContainer}>Register</AppButton>
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
