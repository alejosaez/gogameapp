import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useAppSelector} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';

interface CreateTaskModalProps {
  isVisible: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isVisible,
  onClose,
  onCreate,
}) => {
  const [taskTitle, setTaskTitle] = useState('');

  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);

  const handleCreate = () => {
    if (taskTitle.trim()) {
      onCreate(taskTitle.trim());
      setTaskTitle('');
      onClose();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <KeyboardAvoidingView
        style={styles.modalOverlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Nueva Tarea</Text>

          <Text style={styles.label}>Título</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Diseñar página de inicio"
            placeholderTextColor={currentColors.placeholder}
            value={taskTitle}
            onChangeText={setTaskTitle}
          />

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.modalButton} onPress={handleCreate}>
              <Text style={styles.modalButtonText}>Crear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
              <Text style={styles.modalCloseButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CreateTaskModal;
