import { PropTypes } from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, IconButton } from "react-native-paper";

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

Gauge.propTypes = {
  value: PropTypes.string.isRequired,
  sensorName: PropTypes.string.isRequired,
  sensorTypeIconName: PropTypes.string.isRequired,
  sensorStatusIconColour: PropTypes.string.isRequired,
  sensorStatusIconName: PropTypes.string.isRequired,
};

export default Gauge;
