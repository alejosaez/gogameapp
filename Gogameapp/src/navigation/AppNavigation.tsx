import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TaskListScreen from '../screens/TaskListScreen';
import TaskDetailScreen from '../screens/TaskDetailScreent';

type RootStackParamList = {
  TaskList: undefined;
  TaskDetail: {task: {id: string; title: string; details?: string}};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{title: 'Lista de Tareas'}}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetailScreen}
          options={{title: 'Detalles de la Tarea'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
