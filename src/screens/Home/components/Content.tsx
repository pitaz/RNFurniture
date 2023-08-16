import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, Dimensions} from 'react-native';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';

export const ContentView = () => {
  const navigation = useNavigation<INavigation>();
  const rowItem = (item: any, index: number) => {
    const containerStyle = {
      marginTop: (index + 1) % 2 !== 0 ? 0 : 25,
      borderRadius: 16,
    };
    const {height, width} = Dimensions.get('window');
    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={() => navigation.navigate('detailsScreen')}>
        <Animated.Image
          sharedTransitionTag="sharedTag"
          source={{uri: item}}
          height={height / 4.6}
          width={width / 2.3}
          style={styles.imageStyle}
        />

        <View style={styles.cardTextContainer}>
          <Text style={styles.itemName}>Beko Slim Chair</Text>
          <Text style={styles.itemCreator}>Beko Slim</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Animated.FlatList
        data={[
          'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/2220328/pexels-photo-2220328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/4273433/pexels-photo-4273433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        ]}
        numColumns={2}
        columnWrapperStyle={styles.columnStyle}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => rowItem(item, index)}
        keyExtractor={(_, index) => index.toString()}
        stickyHeaderIndices={[1]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    paddingVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
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
  tab: {
    paddingRight: 20,
  },
  columnStyle: {
    justifyContent: 'space-between',
  },
  cardTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 25,
  },
  imageStyle: {
    borderRadius: 16,
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
});
