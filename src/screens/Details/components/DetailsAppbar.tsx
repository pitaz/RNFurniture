import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

export const DetailsAppBar = () => {
  const navigation = useNavigation();
  return (
    <Animated.View
      style={styles.buttonsContainer}
      entering={FadeInUp.duration(400)}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={30} color="#5c6280" />
      </TouchableOpacity>
      <Text style={styles.barTitle}>Morden</Text>
      <View style={styles.rightIcons}>
        <Icon name="basket-outline" size={30} color="#5c6280" />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
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
});
