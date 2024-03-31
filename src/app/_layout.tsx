import React from "react"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { Slot } from "expo-router"
import AppLayout from "../components/AppLayout/AppLayout"

export default function Layout() {
  return (
    <Provider store={store}>
      <AppLayout>
        <Slot />
      </AppLayout>
    </Provider>
  )
}
