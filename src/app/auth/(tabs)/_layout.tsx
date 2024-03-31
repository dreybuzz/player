import { View, Text, Pressable, StyleSheet } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import { useAppSelector } from "../../../redux/hooks"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import AppText from "../../../components/AppText/AppText"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { styleGuide } from "../../../utils/styleGuide"
import { AntDesign, Ionicons } from "@expo/vector-icons"

export default function Layout() {
  const themeColors = useAppSelector((state) => state.theme.themeColors)
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: themeColors.primary,
      }}
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="login"
        options={{
          href: "/auth/login",
          title: "Login",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="register"
        options={{
          href: "/auth/register",
          title: "Register",
        }}
      />
    </Tabs>
  )
}

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { bottom: bottomInset } = useSafeAreaInsets()
  const themeColors = useAppSelector((state) => state.theme.themeColors)

  return (
    <View
      style={[
        styles.tabBarContainer,
        { backgroundColor: themeColors.primary },
      ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = (
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        ) as string

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          })
        }

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabItemContainer,
              {
                paddingVertical: bottomInset,
                backgroundColor: isFocused ? themeColors.accent : undefined,
              },
              !isFocused ? undefined : styleGuide.globalStyles.shadow,
            ]}>
            {
              <AntDesign
                name={
                  ScreenIcons[route.name as keyof typeof ScreenIcons] as never
                }
                color={themeColors.text}
              />
            }
            <AppText weight={isFocused ? 700 : undefined}>{label}</AppText>
          </Pressable>
        )
      })}
    </View>
  )
}

const ScreenIcons = {
  login: "login",
  register: "adduser",
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    // ...styleGuide.globalStyles.debug,
  },

  tabItemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: styleGuide.sizes.lg,
    // ...styleGuide.globalStyles.debug,
  },
})
