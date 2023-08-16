import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {TabView} from '../../components/TabsView';
import {ContentView} from './components/Content';
import {AppBar} from '../../components/AppBar';

export const HomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const renderMap: any = {
    header: (
      <View>
        <Text style={styles.pageTitle}>Home</Text>
        <Text style={styles.pageTitle}>Furnitures</Text>
      </View>
    ),
    tabs: (
      <TabView
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
    ),
    body: <ContentView />,
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View style={styles.viewContainer}>
        <AppBar showCart showSearch />

        <FlatList
          data={['header', 'tabs', 'body']}
          renderItem={({item}) => {
            return renderMap[item];
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          stickyHeaderIndices={[1]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  tabs: {},
});
