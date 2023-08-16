import React from 'react';
import {FlatList, Text} from 'react-native';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {ContentView} from './components/Content';
import {styles} from './profile.styles';

export const ProfileScreen = () => {
  const renderMap: IRenderMap = {
    header: (
      <View style={styles.titleBg}>
        <View style={styles.profileCircleMask}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileName}>PO</Text>
          </View>
        </View>
        <Text style={styles.name}>Peter Odekwo</Text>
      </View>
    ),
    body: <ContentView />,
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View style={styles.viewContainer}>
        <FlatList
          data={['header', 'body']}
          renderItem={({item}) => {
            return renderMap[item];
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};
