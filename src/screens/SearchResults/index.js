import React, { useState } from 'react';
import { View, Dimensions, Alert } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

import { createOrder } from '../../graphql/mutations';

const SearchResults = () => {
  const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const { originPlace, destinationPlace } = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    } else {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();

        const date = new Date();
        const input = {
          type,
          createdAt: date.toISOString(),

          originLatitude: originPlace.geometry.location.lat,
          originLongitude: originPlace.geometry.location.lng,

          destinationLatitude: destinationPlace.geometry.location.lat,
          destinationLongitude: destinationPlace.geometry.location.lng,

          userId: userInfo.attributes.sub,
          
          carId: "916c2ee2-ef86-41e1-b58d-7e82f3efbd71",
        }

        const response = await API.graphql(
          graphqlOperation(
            createOrder, {
              input: input 
            }
          )
        )

        console.log("work!!!!!!", response)
        Alert.alert(
          "It worked", 
          "your order was a success.",
          [{
            text: "return back home",
            onPress: () => navigation.navigate("Home")
          }]
        )
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
      <View style={{height: Dimensions.get('window').height - 391}}>
        <RouteMap origin={originPlace} destination={destinationPlace}  />
      </View>
      <View style={{ height: 391 }}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  )
}

export default SearchResults;