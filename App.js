import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { DefaultTheme, Provider, Text } from "react-native-paper";

import WeatherStationData from "./pages/WeatherStationData/WeatherStationData";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    surface: "#444",
    text: "#fff",
    background: "dimgrey",
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
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
});
