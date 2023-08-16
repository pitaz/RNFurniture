import React from 'react';
import {Text, TouchableOpacity, FlatList, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {menuData} from './data';
import {styles} from './styles';

export const ContentView = () => {
  const rowItem = (item: IMenuData) => {
    return (
      <TouchableOpacity style={styles.viewContainer}>
        <Icon name={item.icon} size={30} color="#5c6280" />

        <View style={styles.cardTextContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Icon name="chevron-forward-outline" size={25} color="#5c6280" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={menuData}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => rowItem(item)}
      keyExtractor={(_, index) => index.toString()}
      stickyHeaderIndices={[1]}
      style={styles.list}
    />
  );
};
