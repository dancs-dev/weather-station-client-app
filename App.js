import React, { useState } from "react";
import { DefaultTheme, Provider, Text } from "react-native-paper";
import WeatherStationData from "./pages/WeatherStationData/WeatherStationData";
import { ScrollView, RefreshControl, View, StyleSheet } from "react-native";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    surface: "#444",
    text: "#fff",
  },
};

export default function App() {
  return (
    <Provider theme={theme}>
      <ScrollView style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.largeTitle}>Weather station</Text>
          <WeatherStationData endPoint="/all" />
        </View>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666",
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
