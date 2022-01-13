import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
navigator.geolocation = require('@react-native-community/geolocation');

import styles from "./styles";
import PlaceRow from "./PlaceRow";

const DestinationSearch = () => {
  const [ originPlace, setOriginPlace ] = useState(null);
  const [ destinationPlace, setDestinationPlace ] = useState(null);
  const [ didFail, setDidFail ] = useState(false)

  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

  const itFailed = () => {
    setDidFail(true);
  }

  useEffect(() => {
    if (originPlace && destinationPlace) {

    }
  }, [originPlace, destinationPlace])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {didFail ? 
          <Text>FAILED!!!!!!!!!! FAILED!!!!!!!!!! FAILED!!!!!!!!!!</Text>
          : null
        }

        <GooglePlacesAutocomplete
          placeholder='Where to?'
          onPress={(data, details = null) => {
            setOriginPlace(data, details);
          }}
          suppressDefaultStyles
          onFail={error => console.error(error), itFailed}
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator
          }}
          fetchDetails
          query={{
            key: 'AIzaSyC0wfV37gLIwZJBUic-XbPdEs9N2iD57Lo',
            language: 'en',
          }}
          enablePoweredByContainer={false}
          renderRow={(data) => <PlaceRow data={data} />}
          currentLocation={true}
          renderDescription={ (data) => data.description || data.vicinity }
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder='Where to?'
          onPress={(data, details = null) => {
            setDestinationPlace(data, details);
          }}
          suppressDefaultStyles
          onFail={error => console.error(error), itFailed}
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 66
            },
            separator: styles.separator
          }}
          fetchDetails
          query={{
            key: 'AIzaSyC0wfV37gLIwZJBUic-XbPdEs9N2iD57Lo',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          enablePoweredByContainer={false}
        />
        
        <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />

      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;