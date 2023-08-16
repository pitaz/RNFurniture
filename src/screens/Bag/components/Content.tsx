import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, Dimensions, FlatList, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {styles} from './styles';

const {height, width} = Dimensions.get('window');
export const ContentView = () => {
  const navigation = useNavigation<INavigation>();

  const rowItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detailsScreen')}
        style={styles.viewContainer}>
        <Animated.Image
          sharedTransitionTag="sharedTag"
          source={{uri: item}}
          height={height / 12}
          width={width / 6}
          style={styles.imageStyle}
        />

        <View style={styles.cardTextContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.itemPrice}>$100</Text>
            <Text style={styles.itemNewPrice}>$90</Text>
          </View>
          <Text style={styles.itemName}>Beko Slim Chair</Text>
          <Text style={styles.itemCreator}>Beko Slim</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={[
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2220328/pexels-photo-2220328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ]}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => rowItem(item)}
      keyExtractor={(_, index) => index.toString()}
      stickyHeaderIndices={[1]}
    />
  );
};
