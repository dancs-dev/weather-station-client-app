import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import {
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
  RefreshControl,
} from "react-native";
import {
  ActivityIndicator,
  DefaultTheme,
  Provider,
  Text,
} from "react-native-paper";

import WeatherStationData from "./pages/WeatherStationData/WeatherStationData";
import settings from "./settings.json";

export default function App() {
  const [sensorData, setSensorData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  async function getData() {
    setSensorData(null);
    setErrorMessage(null);

    try {
      const response = await axios.get(settings.weatherStationAPI + "/all");
      setSensorData(response.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  });

  let main = null;
  if (sensorData) {
    main = (
      <View style={styles.weatherStationData}>
        <WeatherStationData sensorData={sensorData} />
      </View>
    );
  } else if (errorMessage) {
    main = (
      <Text>
        Currently unable to get weather station data. Error:{" "}
        {`'${errorMessage}'`}.
      </Text>
    );
  } else {
    main = <ActivityIndicator style={styles.activityIndicator} />;
  }

  return (
    <Provider theme={theme}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.main}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StatusBar
          translucent={true}
          backgroundColor={theme.colors.background}
        />
        <Text style={styles.largeTitle}>Weather station</Text>
        {main}
      </ScrollView>
    </Provider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    surface: "#444",
    text: "white",
    background: "dimgrey",
    primary: "lightcoral",
  },
};

const styles = StyleSheet.create({
  activityIndicator: {
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
  container: {
    backgroundColor: theme.colors.background,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 80,
  },
  main: {
    flex: 1,
    marginHorizontal: 16,
  },
  weatherStationData: {
    paddingBottom: 80,
  },
});
