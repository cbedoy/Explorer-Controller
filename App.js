import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { Text, View } from 'react-native';
import DagsScreen from './screens/DagsScreen'
import ExplorerScreen from './screens/ExplorerScreen'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Dags: DagsScreen,
  Explorer: ExplorerScreen,
});

export default createAppContainer(TabNavigator);
