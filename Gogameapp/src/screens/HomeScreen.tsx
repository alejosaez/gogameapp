import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Text, TextInput} from 'react-native';
import AppStyles from '../styles/AppStyles';
import TaskItem from '../components/taskItems/TaskItem';

type Task = {id: string; title: string; details?: string};

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (): void => {
    if (task.trim()) {
      setTasks([...tasks, {id: Date.now().toString(), title: task}]);
      setTask('');
    }
  };

  const deleteTask = (index: number): void => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const navigateToDetails = (task: Task) => {
    navigation.navigate('TaskDetail', {
      task,
      updateTask: (updatedTask: Task) => {
        setTasks(prevTasks =>
          prevTasks.map(t => (t.id === updatedTask.id ? updatedTask : t)),
        );
      },
    });
  };

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.title}>Lista de Tareas</Text>
      <TextInput
        placeholder="Escribe tu tarea..."
        value={task}
        onChangeText={setTask}
        style={AppStyles.input}
      />
      <TouchableOpacity style={AppStyles.button} onPress={addTask}>
        <Text style={AppStyles.buttonText}>Añadir Tarea</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <TaskItem
            task={item.title}
            onDelete={() => deleteTask(index)}
            onEdit={() => navigateToDetails(item)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
