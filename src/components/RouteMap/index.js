import React from 'react';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC0wfV37gLIwZJBUic-XbPdEs9N2iD57Lo'

const RouteMap = ({ origin, destination }) => {

  console.log("this here:", origin, destination)

  const originLoc = {
    latitude: origin.geometry.location.lat,
    longitude: origin.geometry.location.lng
  };

  const destinationLoc = {
    latitude: destination.geometry.location.lat,
    longitude: destination.geometry.location.lng
  }

  return (
    <MapView
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.027,
        longitudeDelta: 0.011,
      }}
      showsUserLocation={true}
    >
       <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        timePrecision={'now'}
        strokeWidth={4}
      />
      <Marker 
        coordinate={originLoc}
        description={'Origin'}
      />
      <Marker 
        coordinate={destinationLoc}
        description={'Destination'}
       />
    </MapView>
  )
}

export default RouteMap;