import React, {useState, useEffect} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  TaskList: undefined;
  TaskDetail: {task: {id: string; title: string; details?: string}};
};

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetail'>;

const TaskDetailScreen: React.FC<Props> = ({route, navigation}) => {
  const {task} = route.params;
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDetails, setTaskDetails] = useState(task.details || '');

  useEffect(() => {
    console.log(`Cargando detalles para la tarea:`, task);
  }, [task]);

  const saveDetails = () => {
    console.log('Guardando detalles:', {
      taskId: task.id,
      taskTitle,
      taskDetails,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholder="Título de la tarea"
        style={styles.input}
      />
      <TextInput
        value={taskDetails}
        onChangeText={setTaskDetails}
        placeholder="Detalles de la tarea"
        multiline
        style={styles.textArea}
      />
      <Button title="Guardar" onPress={saveDetails} />
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
  textArea: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    height: 100,
    textAlignVertical: 'top',
  },
});

export default TaskDetailScreen;
