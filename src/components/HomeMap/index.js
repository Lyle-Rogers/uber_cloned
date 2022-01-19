import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { API, graphqlOperation } from 'aws-amplify';

import { listCars } from '../../graphql/queries';

const HomeMap = () => {
  const [cars, setCars] = useState([]);

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    }
    return require('../../assets/images/top-Comfort.png')
  }

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(
            listCars
          )
        )
        console.log(response)
      } catch (e) {
        console.log(e);
      }
    };

    fetchCars();
  }, [])

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
      {cars.map((car) => (
        <Marker 
          coordinate={{ latitude : car.latitude, longitude : car.longitude }}
          key={car.id}
        >
          <Image 
            style={{
              width: 73, 
              height: 73, 
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`, 
              }]
            }}
            source={getImage(car.type)} 
          />
        </Marker>
      ))}
    </MapView>
  )
}

export default HomeMap;