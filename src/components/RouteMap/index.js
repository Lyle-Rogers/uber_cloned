import React from 'react';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC0wfV37gLIwZJBUic-XbPdEs9N2iD57Lo'

const RouteMap = () => {

  const origin = {
    latitude: 28.450627,
    longitude: -16.263045
  }

  const destination = {
    latitude: 28.460127,
    longitude: -16.269045
  }

  return (
    <MapView
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        timePrecision={'now'}
        strokeWidth={4}
      />
      <Marker 
        coordinate={origin}
        description={'Origin'}
      />
      <Marker 
        coordinate={destination}
        description={'Destination'}
      />
    </MapView>
  )
}

export default RouteMap;