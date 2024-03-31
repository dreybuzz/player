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
        name="matchdays"
        options={{
          href: "/main/matchdays",
          title: "Matchdays",
        }}
      />

      <Tabs.Screen
        name="teams"
        options={{
          href: "/main/teams",
          title: "Teams",
        }}
      />

      <Tabs.Screen
        name="hub"
        options={{
          href: "/main/hub",
          title: "Hub",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          href: "/main/profile",
          title: "Profile",
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
        { backgroundColor: themeColors.neutral },
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
                paddingBottom: bottomInset,
                paddingTop: styleGuide.sizes.xxxl,
                // backgroundColor: isFocused ? themeColors.accent : undefined,
              },
              //   !isFocused ? undefined : styleGuide.globalStyles.shadow,
            ]}>
            {
              <AntDesign
                name={
                  ScreenIcons[route.name as keyof typeof ScreenIcons] as never
                }
                color={themeColors.text}
                maxFontSizeMultiplier={1.5}
                size={styleGuide.sizes.xxxl}
              />
            }
            <View
              style={[
                styles.labelContainer,
                {
                  borderBottomWidth: isFocused ? 2 : 0,
                  borderColor: themeColors.text,
                },
              ]}>
              <AppText weight={isFocused ? 700 : undefined}>{label}</AppText>
            </View>
          </Pressable>
        )
      })}
    </View>
  )
}

const ScreenIcons = {
  matchdays: "calendar",
  teams: "team",
  hub: "API",
  profile: "user",
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    // ...styleGuide.globalStyles.debug,
  },

  tabItemContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: styleGuide.sizes.lg,
    // ...styleGuide.globalStyles.debug,
  },

  labelContainer: {
    paddingBottom: styleGuide.sizes.sm,
  },
})
