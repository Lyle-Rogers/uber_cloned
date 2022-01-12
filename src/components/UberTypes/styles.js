import { StyleSheet, Dimensions } from 'react-native';
const { Height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Height,
  }
});

export default styles;