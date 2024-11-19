import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigation'; // Importa el AppNavigator
import AppStyles from './src/styles/AppStyles'; // Tus estilos globales

const App: React.FC = () => {
  return (
    <SafeAreaView style={AppStyles.safeAreaContainer}>
      {/* Barra de estado */}
      <StatusBar barStyle="dark-content" />

      {/* Contenedor de Navegación */}
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
