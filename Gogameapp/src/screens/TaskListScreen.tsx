import React, {useState} from 'react';
import {View, FlatList, TextInput, TouchableOpacity, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import TaskItem from '../components/taskItems/TaskItem';
import AppStyles from '../styles/AppStyles'; // Importa tus estilos centralizados

type RootStackParamList = {
  TaskList: undefined;
  TaskDetail: {taskId: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'TaskList'>;

type Task = {id: string; title: string};

const TaskListScreen: React.FC<Props> = ({navigation}) => {
  const [taskInput, setTaskInput] = useState<string>(''); // Renombrado para evitar conflicto
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {id: Date.now().toString(), title: taskInput};
      setTasks([...tasks, newTask]);
      setTaskInput(''); // Limpia el campo de entrada después de agregar
    }
  };

  const deleteTask = (taskId: string) => {
    // Cambiado de `id` a `taskId` para mayor claridad
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const navigateToDetails = (taskId: string) => {
    navigation.navigate('TaskDetail', {taskId});
  };

  return (
    <View style={AppStyles.container}>
      <TextInput
        value={taskInput}
        onChangeText={setTaskInput}
        placeholder="Escribe tu tarea..."
        style={AppStyles.input}
      />
      <TouchableOpacity onPress={addTask} style={AppStyles.button}>
        <Text style={AppStyles.buttonText}>Añadir Tarea</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({item}: {item: Task}) => (
          <TaskItem
            task={item.title}
            onEdit={() => navigateToDetails(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TaskListScreen;
