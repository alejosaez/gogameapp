import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AppStyles from '../../styles/AppStyles';
import TrashIcon from '../Icons/ TrashIcon'; 

interface TaskItemProps {
  task: string;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({task, onEdit, onDelete}) => {
  return (
    <View style={AppStyles.taskItem}>
      {/* Texto de la tarea */}
      <TouchableOpacity style={AppStyles.taskContent} onPress={onEdit}>
        <Text style={AppStyles.taskText}>{task}</Text>
      </TouchableOpacity>

      {/* Botón de eliminar */}
      <TouchableOpacity onPress={onDelete} style={AppStyles.deleteButton}>
        <TrashIcon size={20} color="#e63946" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
