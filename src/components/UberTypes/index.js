import React from 'react';
import { Text, Pressable, ScrollView } from 'react-native';

import styles from './styles';

import UberTypesRow from '../UberTypesRow';

import typesData from '../../assets/data/types'

const UberTypes = () => {
  const confirm = () => {
    console.warn('confirmed!')
  }
  return (
    <ScrollView style={styles.container}>
      {typesData.map(type => (
        <UberTypesRow type={type} key={type.id} />
      ))}

      <Pressable onPress={confirm} style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Confirm Uber
        </Text>
      </Pressable>
    </ScrollView>
  );
}

export default UberTypes;