import React, {useState} from 'react';
import {View, FlatList, TextInput, TouchableOpacity, Text} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {StyleSheet} from 'react-native';
import TaskItem from '../components/taskItems/TaskItem';

type RootStackParamList = {
  TaskList: undefined;
  TaskDetail: {task: Task};
};

type Props = NativeStackScreenProps<RootStackParamList, 'TaskList'>;

type Task = {
  id: string;
  title: string;
  details?: string;
};

const TaskListScreen: React.FC<Props> = ({navigation}) => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, {id: Date.now().toString(), title: task}]);
      setTask('');
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const navigateToDetails = (task: Task) => {
    navigation.navigate('TaskDetail', {
      task,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Escribe tu tarea..."
        style={styles.input}
      />
      <TouchableOpacity onPress={addTask} style={styles.button}>
        <Text style={styles.buttonText}>Añadir Tarea</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <TaskItem
            task={item.title}
            onEdit={() => navigateToDetails(item)}
            onDelete={() => deleteTask(index)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaskListScreen;
