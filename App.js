import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Keyboard, Text } from 'react-native';
import uuid from 'react-native-uuid';
import ModalDeleteProducto from './src/Componentes/ModalDeleteProducto';
import AddProducto from './src/Componentes/AddProducto';
import ListProducto from './src/Componentes/ListProducto';


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const [contador, setContador] = useState(); 
  const screenWidth = Dimensions.get('window').width;

  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      completed: false,
      title: taskTitle,
      contador: contador, 
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setContador(); 
    Keyboard.dismiss();
  };

  const onHandlerTitle = (t) => {
    setTaskTitle(t);
  };

  const onHandlerModaDelete = (task) => {
    setTaskSelected(task);
    setModalVisible(!modalVisible);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id !== taskSelected.id));
    setModalVisible(!modalVisible);
  };

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) return { ...task, ...{ completed: !task.completed } };
      return task;
    }));
  };

  return (
    <View style={styles.container}>
      <View styles={styles.titu} >
        <Text style={styles.titulo} >Listado de compras</Text>
      </View>

      <AddProducto
        taskTitle={taskTitle}
        onHandlerTitle={onHandlerTitle}
        addTask={addTask}
        contador={contador} 
        setContador={setContador} 
      />

      <ListProducto
        tasks={tasks}
        onHandlerModaDelete={onHandlerModaDelete}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
        contador={contador} 
        setContador={setContador}
      />

      <ModalDeleteProducto
        modalVisible={modalVisible}
        taskSelected={taskSelected}
        deleteTask={deleteTask}
        onHandlerModaDelete={onHandlerModaDelete}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E86C1",
    flex: 1,
    paddingTop: 30,
    
    },
    titu:{
      alignItems:"center",  
    },

    titulo: {
     
    backgroundColor: "red",
    fontSize:30
    }
  },
  
);
