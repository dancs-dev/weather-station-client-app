import { Card, IconButton } from "react-native-paper";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const Gauge = (props) => {
  return (
    <View style={styles.card}>
    <Card>
      <Card.Title
        title={props.value}
        subtitle={props.sensorName}
        left={() => <IconButton icon={props.sensorTypeIconName} />}
        right={() => (
          <IconButton
            color={props.sensorStatusIconColour}
            icon={props.sensorStatusIconName}
          />
        )}
      />
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 4,
  },
});

export default Gauge;
