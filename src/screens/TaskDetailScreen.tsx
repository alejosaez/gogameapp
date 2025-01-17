import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '../redux/reduxHook';
import {RootState} from '../redux/store';
import {updateTask} from '../redux/actions/tasksActions';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {useTranslation} from 'react-i18next';

type TaskDetailScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetail'>;
type TaskDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TaskDetail'
>;

interface TaskDetailScreenProps {
  route: TaskDetailScreenRouteProp;
  navigation: TaskDetailScreenNavigationProp;
}

const TaskDetailScreen: React.FC<TaskDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const {taskId} = route.params;
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);

  const taskData = useAppSelector((state: RootState) =>
    state.tasks.allTasks.find(task => task.id === taskId),
  );

  const {t} = useTranslation();

  const [title, setTitle] = useState(taskData?.title || '');
  const [content, setContent] = useState(taskData?.content || '');

  useEffect(() => {
    if (taskData) {
      setTitle(taskData.title);
      setContent(taskData.content);
    }
  }, [taskData]);

  const handleSave = () => {
    if (taskData) {
      dispatch(updateTask({id: taskData.id, title, content}))
        .unwrap()
        .then(() => {
          console.log(t('taskUpdated'));
          navigation.goBack();
        })
        .catch(error => {
          console.error(t('taskUpdateError'), error);
        });
    }
  };

  const handleExitWithoutSave = () => {
    navigation.goBack();
  };

  if (!taskData) {
    console.error(t('taskNotFound'), taskId);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{t('taskNotFound')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
        placeholder={t('taskTitlePlaceholder')}
        placeholderTextColor={currentColors.placeholder}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.editorContainer}>
        <TextInput
          style={[
            styles.editor,
            {backgroundColor: currentColors.card, color: currentColors.text},
          ]}
          multiline
          value={content}
          onChangeText={setContent}
          placeholder={t('taskContentPlaceholder')}
          placeholderTextColor={currentColors.placeholder}
        />
      </KeyboardAvoidingView>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: currentColors.primary}]}
          onPress={handleSave}>
          <Text style={styles.buttonText}>{t('saveChanges')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: currentColors.error}]}
          onPress={handleExitWithoutSave}>
          <Text style={styles.buttonText}>{t('exitWithoutSave')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskDetailScreen;
