import React, {useState, useEffect} from 'react';
import {View, Dimensions, Text} from 'react-native';

import OrderMap from '../../components/OderMap';
// import {onUpdateOrder} from './subscriptions';

import {useRoute} from '@react-navigation/native';

import {API, graphqlOperation} from 'aws-amplify';
import {getOrder, getCar} from '../../graphql/queries';

const OrderScreen = () => {
  const [car, setCar] = useState(null);
  const [order, setOrder] = useState(null);

  const route = useRoute();

  const fetchOrder = async () => {
    try {
      const orderData = await API.graphql(
        graphqlOperation(getOrder, {id: route.params.id}),
      );
      setOrder(orderData.data.getOrder);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchCar = async () => {
    if (order?.carId) {
      try {
        const carData = await API.graphql(
          graphqlOperation(getCar, {id: order.carId}),
        );
        setCar(carData.data.getCar);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchOrder();
      fetchCar();
    }, 191000);
  });

  useEffect(() => {
    if (!order?.carId) {
      return;
    }

    const fetchCar = async () => {
      try {
        const carData = await API.graphql(
          graphqlOperation(getCar, {id: order.carId}),
        );
        setCar(carData.data.getCar);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCar();
  }, [order]);

  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 371}}>
        <OrderMap car={car} />
      </View>
      <View>
        <Text>Order Status {order?.status}</Text>
      </View>
    </View>
  );
};

export default OrderScreen;
