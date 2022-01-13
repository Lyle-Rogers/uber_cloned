import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
    height: '100%',
  },
  textInput: {
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#c0bfbf',
    marginVertical: 5,
    marginLeft: 11,
  },

  separator: {
    backgroundColor: "#adaaaa",
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 117,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 6,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  iconContainer: {
    backgroundColor: '#6e6d6d',
    padding: 1.9,
    borderRadius: 50,
    marginRight: 9,
  },
  locationText: {
    color: 'black',
    fontWeight: 'bold',
  },

  circle: {
    width: 9,
    height: 9,
    backgroundColor: 'black',
    position: 'absolute',
    top: 30,
    left: 6,
    borderRadius: 9,
  },
  line: {
    width: 3,
    height: 43,
    position: 'absolute',
    backgroundColor: 'black',
    top: 43,
    left: 9,
  },
  square: {
    width: 9,
    height: 9,
    backgroundColor: 'black',
    position: 'absolute',
    top: 90,
    left: 6,
  }
});

export default styles;