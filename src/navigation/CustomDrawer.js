import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{ marginTop: -5 }}>
      <View style={{ backgroundColor: '#212121', padding: 15, }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <View style={{
            backgroundColor: 'grey', 
            width: 47,
            height: 47,
            borderRadius: 23.5,
            marginRight: 10
          }} />
          <View>
            <Text style={{color: 'white', fontSize: 24}}>Liquid Silence</Text>
            <Text style={{ color: 'grey'}}>5.00 *</Text>
          </View>
        </View>

        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          borderTopWidth: 1,
          borderTopColor: 'grey',
          paddingVertical: 5,
          marginVertical: 9
        }}>
          <Pressable
            onPress={() => console.warn("Messages it was clicked!")}
          >
            <Text style={{color: 'white', paddingVertical: 5, }}>
              Messages
            </Text>
          </Pressable>
        </View>
        
        <Pressable
          onPress={() => console.warn("Do more with your account it was clicked!")}
        >
          <Text style={{color: 'grey', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>
        
        <Pressable
          onPress={() => console.warn("Make money driving it is clicked.")}
        >
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer;