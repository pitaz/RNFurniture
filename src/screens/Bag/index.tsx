import React from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {ContentView} from './components/Content';
import {styles} from './styles';
import {AppBar} from '../../components/AppBar';

export const BagScreen = () => {
  const renderMap: any = {
    header: (
      <View style={styles.titleBg}>
        <Text style={styles.pageTitle}>Bag</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    ),
    body: <ContentView />,
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View style={styles.viewContainer}>
        <AppBar showSearch />

        <FlatList
          data={['header', 'body']}
          renderItem={({item}) => {
            return renderMap[item];
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          stickyHeaderIndices={[0]}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};
