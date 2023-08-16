import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const AppBar = ({showSearch, showCart}: IAppbar) => {
  const navigation = useNavigation<INavigation>();
  return (
    <View style={styles.buttonsContainer}>
      <Icon name="menu-outline" size={30} color="#5c6280" />
      <View style={styles.rightIcons}>
        {showSearch && <Icon name="search-outline" size={30} color="#5c6280" />}
        {showCart && (
          <Icon
            name="basket-outline"
            size={30}
            color="#5c6280"
            onPress={() => navigation.navigate('Cart')}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
