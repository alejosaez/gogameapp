import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
import AppStyles from './src/styles/AppStyles';

const App: React.FC = () => {
  return (
    <SafeAreaView style={AppStyles.safeAreaContainer}>
      <StatusBar barStyle="dark-content" />

      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
