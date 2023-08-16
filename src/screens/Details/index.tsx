import React from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {DetailsAppBar} from './components/DetailsAppbar';
import {DetailsWriteUpSection} from './components/DetailWriteUpSection';
import {styles} from './styles';
import Animated from 'react-native-reanimated';

export const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.scrollView}>
      <StatusBar animated={true} backgroundColor="#fff" />
      <View style={styles.viewContainer}>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <DetailsAppBar />
        <Animated.Image
          source={{
            uri: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.imageStyle}
        />
        <DetailsWriteUpSection />
      </View>
    </SafeAreaView>
  );
};
