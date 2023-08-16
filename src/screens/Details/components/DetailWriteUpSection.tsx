import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {detailData} from './data';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';
import {styles} from './styles';

export const DetailsWriteUpSection = () => {
  return (
    <Animated.View style={styles.detailsbg} entering={FadeInDown.duration(450)}>
      <View style={styles.detailsWriteUp}>
        <View style={styles.titleRow}>
          <View>
            <Animated.Text
              style={styles.itemName}
              entering={FadeInLeft.duration(650)}>
              Beko Slim Chair
            </Animated.Text>
            <Animated.Text
              style={styles.itemCreator}
              entering={FadeInLeft.duration(700)}>
              by Fred Hage
            </Animated.Text>
          </View>
          <Text style={styles.amount}>$1625</Text>
        </View>
        <Animated.View
          style={styles.ratingView}
          entering={FadeInLeft.duration(750)}>
          <Text style={styles.ratingText}>4.5</Text>
          {Array.from(Array(5)).map((_, index) => {
            return <Icon name="star" key={index} size={25} color="#f09f58" />;
          })}
        </Animated.View>
        <Animated.View
          style={styles.specSection}
          entering={FadeInDown.duration(550)}>
          {detailData.map(item => (
            <View key={item.id}>
              <Text style={styles.specTitle}>{item.specTitle}</Text>
              <Text style={styles.specProperty}>{item.specProperty}</Text>
            </View>
          ))}
        </Animated.View>
        <Animated.View
          style={styles.descriptionSection}
          entering={FadeInDown.duration(600)}>
          <Text style={styles.description}>
            It's a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout
          </Text>
        </Animated.View>
      </View>
      <Animated.View
        style={styles.buttonWrapper}
        entering={FadeInRight.duration(600)}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};
