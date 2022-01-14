import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
navigator.geolocation = require('@react-native-community/geolocation');
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import PlaceRow from "./PlaceRow";

const DestinationSearch = () => {
  const [ originPlace, setOriginPlace ] = useState(null);
  const [ destinationPlace, setDestinationPlace ] = useState(null);
  const [ didFail, setDidFail ] = useState(false)

  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 28.450627, lng: -16.263045 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 28.460127, lng: -16.269045 } },
  };

  const navigation = useNavigation();

  const itFailed = () => {
    setDidFail(true);
  }

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate("SearchResults", {
        originPlace,
        destinationPlace
      });
    // console.log('origin', originPlace)
    // console.log('destination', destinationPlace)
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
          placeholder='Where from?'
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
          renderRow={(data) => <PlaceRow key={data.description || data.vicinity} data={data} />}
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
          renderRow={(data) => <PlaceRow key={data.description || data.vicinity} data={data} />}
          predefinedPlaces={[homePlace, workPlace]}
          currentLocation={true}
          renderDescription={ (data) => data.description || data.vicinity }
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