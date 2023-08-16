import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: '#Fefefe',
  },
  tab: {
    paddingRight: 20,
  },
  columnStyle: {
    justifyContent: 'space-between',
  },
  cardTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  imageStyle: {
    borderRadius: 4,
  },
  itemName: {
    color: '#5c6280',
    fontWeight: '400',
  },
  itemCreator: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 10,
    color: '#f09f58',
  },
  itemPrice: {
    color: 'red',
    textDecorationLine: 'line-through',
  },
  itemNewPrice: {
    color: '#5c6280',
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  divider: {
    backgroundColor: '#5c6280',
    height: 1,
    width: width,
    marginBottom: 15,
  },
});
