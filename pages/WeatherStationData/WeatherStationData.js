import { PropTypes } from "prop-types";
import React from "react";

import Gauge from "../../components/Gauge/Gauge";
import settings from "../../settings.json";

const WeatherStationData = (props) => {
  const sensorData = props.sensorData;

  const getSensorDatumValueByApiType = (type) => {
    for (let datum of sensorData) {
      if (datum.type == type) {
        return datum.value;
      }
    }
    return `${type} unavailable`;
  };

  const getSensorDatumStatusByApiType = (bad, ok, value) => {
    if (value < bad[0] || value > bad[1]) {
      return settings.statuses.bad;
    } else if (value < ok[0] || value > ok[1]) {
      return settings.statuses.ok;
    }
    return settings.statuses.good;
  };

  let sensorSettings = [];
  for (let key in settings.sensors) {
    let value = settings.sensors[key];
    sensorSettings.push(value);
  }

  if (sensorData) {
    const formattedSensorData =
      sensorData == false
        ? null
        : sensorSettings.map((sensor, index) => (
            <Gauge
              key={index}
              value={
                (getSensorDatumValueByApiType(sensor.apiType) * 2).toFixed() /
                  2 +
                sensor.unit
              }
              sensorName={sensor.name}
              sensorTypeIconName={sensor.sensorIcon}
              sensorStatusIconColour={
                getSensorDatumStatusByApiType(
                  sensor.bad,
                  sensor.ok,
                  getSensorDatumValueByApiType(sensor.apiType)
                ).sensorStatusIconColour
              }
              sensorStatusIconName={
                getSensorDatumStatusByApiType(
                  sensor.bad,
                  sensor.ok,
                  getSensorDatumValueByApiType(sensor.apiType)
                ).sensorStatusIconName
              }
            />
          ));
    return formattedSensorData;
  }
};

WeatherStationData.propTypes = {
  sensorData: PropTypes.array.isRequired,
};

export default WeatherStationData;
