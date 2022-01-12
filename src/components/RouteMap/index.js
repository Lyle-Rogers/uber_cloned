import React from 'react';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const RouteMap = () => {return (
    <MapView
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  )
}

export default RouteMap;