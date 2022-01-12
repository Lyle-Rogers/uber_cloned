import React, { useState, useEffect } from "react";
import { View, TextInput, Text, SafeAreaView } from 'react-native';

import styles from "./styles";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [ originPlace, setOriginPlace ] = useState(null);
  const [ destinationPlace, setDestinationPlace ] = useState(null);

  const [ didFail, setDidFail ] = useState(false)

  useEffect(() => {
    console.warn('this is pretty!')
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace])

  const itFailed = () => {
    setDidFail(true);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {didFail ? 
          <Text>FAILED!!!!!!!!!! FAILED!!!!!!!!!! FAILED!!!!!!!!!! FAILED!!!!!!!!!!</Text>
          : null
        }
        <GooglePlacesAutocomplete
          placeholder='Where to?'
          onPress={(data, details = null) => {
            setOriginPlace(data, details);
          }}
          onFail={error => console.error(error), itFailed}
          styles={{
            textInput: styles.textInput
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDlsKVNunKScLAFxkT8U_q4s7w_yNOviCQ',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder='Where to?'
          onPress={(data, details = null) => {
            setDestinationPlace(data, details);
          }}
          onFail={itFailed}
          styles={{
            textInput: styles.textInput
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDlsKVNunKScLAFxkT8U_q4s7w_yNOviCQ',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;