/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

// import HomeScreen from './src/screens/HomeScreen';
// import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';

export default function App() {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'uber cloned location permissions need granting',
          message: 
            'uber cloned will need your location access!' +
            'so you can take awesome latitude calcs and a little longitude as well!.',
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('It was granted and the location system will work');
      } else {
        console.log("It was denied! We're very f**ked!");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // Requests for ios permissions and not android!
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <>
      <StatusBar barStyle='dark-content' />
      {/* <HomeScreen /> */}
      {/* <SearchResults /> */}
      <DestinationSearch />
    </>
  );
};