import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 38,
    color: '#5c6280',
    fontWeight: '600',
  },
  titleBg: {
    backgroundColor: '#5c6280',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    height: height / 10,
    alignItems: 'center',
  },
  list: {
    height: '100%',
  },
  profileName: {
    fontSize: 28,
    fontWeight: '900',
    color: 'white',
  },
  profileCircle: {
    height: 90,
    width: 90,
    borderRadius: 45,
    flexDirection: 'row',
    backgroundColor: '#5c6280',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCircleMask: {
    height: 95,
    width: 95,
    borderRadius: 48,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
  },
  name: {
    position: 'absolute',
    top: 150,
    fontSize: 20,
    color: '#5c6280',
  },
});
