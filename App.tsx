import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigator from './src/navigation/mainNavigator/MainNavigator';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
