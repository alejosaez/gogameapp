import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  safeAreaContainer: {
    flex: 1,
  },
  taskItem: {
    backgroundColor: '#fff',
    borderRadius: 10, // Bordes redondeados
    padding: 15, // Espaciado interno
    marginBottom: 10, // Separación entre tareas
    width: screenWidth - 40, // Ocupa casi todo el ancho de la pantalla
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra en Android
    alignSelf: 'center', // Centra horizontalmente
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 5, // Aumenta el área táctil
  },
  taskContent: {
    flex: 1, // Ocupa todo el espacio restante en la fila
  },
});

export default AppStyles;
