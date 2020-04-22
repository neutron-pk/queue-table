import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    minHeight: 80,
    padding: 8,
    backgroundColor: '#fafafa',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderColor: '#e8e8e8',
  },
  itemEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    padding: 8,
  },
});
