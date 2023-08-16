import React, {Dispatch, SetStateAction} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {tabData} from './data';
import {styles} from './styles';

export const TabView = ({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}) => {
  const color = (index: number) =>
    selectedIndex === index ? '#f09f58' : '#616784';
  return (
    <View style={styles.viewContainer}>
      <FlatList
        data={tabData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => setSelectedIndex(index)}>
            <Text
              style={{
                ...styles.tab,
                color: color(index),
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index.toString()}
        stickyHeaderIndices={[1]}
      />
    </View>
  );
};
