import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 15,
    backgroundColor: '#Fefefe',
    alignItems: 'center',
    paddingVertical: 15,
  },

  cardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.3,
    paddingVertical: 5,
    alignItems: 'center',
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
  list: {
    marginTop: 100,
  },
});
