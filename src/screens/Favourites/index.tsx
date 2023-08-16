import React from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {ContentView} from './components/Content';
import {AppBar} from '../../components/AppBar';

export const FavouritesScreen = () => {
  const renderMap: any = {
    header: (
      <View style={styles.titleBg}>
        <Text style={styles.pageTitle}>Favourites</Text>
      </View>
    ),
    body: <ContentView />,
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View style={styles.viewContainer}>
        <AppBar showCart showSearch />
        <FlatList
          data={['header', 'body']}
          renderItem={({item}) => renderMap[item]}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          stickyHeaderIndices={[0]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  viewContainer: {
    padding: 20,
    backgroundColor: '#f2f2f6',
    marginBottom: 20,
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
  titleBg: {
    backgroundColor: '#f2f2f6',
  },
});
