import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

const lightColors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  background: '#f4f4f4',
  text: '#333',
  error: '#e74c3c',
  border: '#ddd',
  placeholder: '#aaa',
  accent: '#8e44ad',
};

const darkColors = {
  primary: '#9b59b6',
  secondary: '#1abc9c',
  background: '#000',
  text: '#FFF',
  error: '#e74c3c',
  border: '#555',
  placeholder: '#888',
  accent: '#2ecc71',
};

const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

const Typography = {
  h1: {fontSize: 32, fontWeight: '700' as TextStyle['fontWeight']},
  h2: {fontSize: 24, fontWeight: '700' as TextStyle['fontWeight']},
  body: {fontSize: 16, fontWeight: '400' as TextStyle['fontWeight']},
  small: {fontSize: 12, fontWeight: '400' as TextStyle['fontWeight']},
};

interface AppStylesType {
  container: ViewStyle;
  text: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  searchBar: TextStyle;
  taskItem: ViewStyle;
  taskTitle: TextStyle;
  emptyStateText: TextStyle;
  createButton: ViewStyle;
  createButtonText: TextStyle;
  modalContainer: ViewStyle;
  modalTitle: TextStyle;
  modalInput: TextStyle;
  modalButton: ViewStyle;
  modalButtonText: TextStyle;
  modalCloseButton: ViewStyle;
  modalCloseButtonText: TextStyle;
  errorText: TextStyle;
  saveButton: ViewStyle;
  saveButtonText: TextStyle;
  titleInput: TextStyle;
  editor: ViewStyle;
  editorContainer: ViewStyle;
  taskItemContainer: ViewStyle;
}

const createAppStyles = (Colors: typeof lightColors): AppStylesType =>
  StyleSheet.create<AppStylesType>({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
      padding: Spacing.medium,
    },
    text: {
      ...Typography.body,
      color: Colors.text,
    },
    button: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Spacing.medium,
      backgroundColor: Colors.primary,
      paddingHorizontal: Spacing.large,
    },
    buttonText: {
      ...Typography.body,
      color: '#fff',
      fontWeight: '700',
      textAlign: 'center',
    },
    searchBar: {
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingHorizontal: Spacing.medium,
      ...Typography.body,
      borderColor: Colors.border,
      borderWidth: 1,
      marginBottom: Spacing.medium,
      color: Colors.text,
    },
    taskItem: {
      backgroundColor: '#fff',
      padding: Spacing.medium,
      borderRadius: 8,
      marginBottom: Spacing.small,
      borderWidth: 1,
      borderColor: Colors.border,
    },
    taskTitle: {
      ...Typography.body,
      color: Colors.text,
    },
    emptyStateText: {
      textAlign: 'center',
      color: Colors.placeholder,
      ...Typography.body,
      marginTop: Spacing.medium,
    },
    createButton: {
      position: 'absolute',
      bottom: Spacing.large,
      right: Spacing.large,
      backgroundColor: Colors.accent,
      borderRadius: 50,
      padding: Spacing.medium,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    createButtonText: {
      ...Typography.h2,
      color: '#fff',
      textAlign: 'center',
    },
    errorText: {
      ...Typography.small,
      color: Colors.error,
      marginTop: Spacing.small,
      textAlign: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: Spacing.large,
    },
    modalTitle: {
      ...Typography.h2,
      color: '#fff',
      marginBottom: Spacing.medium,
    },
    modalInput: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: Spacing.medium,
      marginBottom: Spacing.medium,
      ...Typography.body,
      color: Colors.text,
      borderWidth: 1,
      borderColor: Colors.border,
    },
    modalButton: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.primary,
      paddingHorizontal: Spacing.large,
      paddingVertical: Spacing.medium,
      marginBottom: Spacing.small,
    },
    modalButtonText: {
      ...Typography.body,
      color: '#fff',
      fontWeight: '700',
    },
    modalCloseButton: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.error,
      paddingHorizontal: Spacing.large,
      paddingVertical: Spacing.medium,
    },
    modalCloseButtonText: {
      ...Typography.body,
      color: '#fff',
      fontWeight: '700',
    },
    titleInput: {
      ...Typography.h2,
      color: Colors.text,
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
      marginBottom: Spacing.small,
      paddingVertical: 5,
    },
    editor: {
      flex: 1,
      backgroundColor: '#f9f9f9',
      padding: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    editorContainer: {
      flex: 1,
    },
    saveButton: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.primary,
      marginTop: Spacing.medium,
      paddingVertical: Spacing.medium,
    },
    saveButtonText: {
      ...Typography.body,
      color: '#fff',
      fontWeight: '700',
    },
    taskItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });

export {createAppStyles, lightColors, darkColors, Spacing, Typography};
