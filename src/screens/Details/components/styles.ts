import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  viewContainer: {
    backgroundColor: '#f2f2f6',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#5c6280',
  },
  imageStyle: {
    width: '100%',
    height: 400,
    objectFit: 'cover',
  },
  detailsbg: {
    backgroundColor: '#5c6280',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -90,
    paddingTop: 40,
  },
  detailsWriteUp: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  itemName: {
    color: '#f09f58',
    fontSize: 20,
    fontWeight: '600',
  },
  itemCreator: {
    color: '#c1c1c1',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height / 50,
  },
  ratingText: {
    fontSize: 25,
    marginRight: 10,
    color: 'white',
  },
  specSection: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 15,
  },
  specTitle: {
    color: '#fff',
    fontSize: 20,
  },
  specProperty: {
    color: '#f09f58',
    marginTop: 10,
    fontSize: 18,
  },
  descriptionSection: {
    marginTop: 20,
  },
  description: {
    fontSize: 22,
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
  button: {
    backgroundColor: '#f09f58',
    paddingHorizontal: 10,
    paddingVertical: 30,
    width: width / 2.5,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#5c6280',
    fontSize: 20,
    fontWeight: '500',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
