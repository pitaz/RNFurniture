import {StyleSheet} from 'react-native';

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
    backgroundColor: '#fff',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    height: '100%',
  },
  button: {
    backgroundColor: '#f09f58',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
