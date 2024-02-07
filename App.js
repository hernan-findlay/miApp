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
  const [quantity, setQuantity] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
      completed: false,
      title: taskTitle,
      quantity: quantity,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setQuantity(0);
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
      <View style={styles.titulo}><Text >Listado de compras</Text></View>

      <AddProducto
        taskTitle={taskTitle}
        onHandlerTitle={onHandlerTitle}
        addTask={addTask}
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <ListProducto
        tasks={tasks}
        onHandlerModaDelete={onHandlerModaDelete}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
        quantity={quantity}
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
      titulo: {
      justifyContent: "center",   
      backgroundColor: "red"
      }
  },
  
});
