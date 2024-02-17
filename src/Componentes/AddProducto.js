import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Button } from 'react-native';

const AddProducto = ({ taskTitle, onHandlerTitle, addTask }) => {
  
  const [contador, setContador] = useState(0);
  
  const incrementQuantity = () => {
    if (contador < 20) {
      setContador(contador + 1);
    }
  };

  const decrementQuantity = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={taskTitle}
        onChangeText={onHandlerTitle}
        placeholder="Ingresar producto"
        placeholderTextColor="black"
        maxLength={25}
        style={styles.input}
      />
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{contador}</Text> 
        <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Button title="Agregar Producto" onPress={() => addTask()} />
    </View>
  );
};

export default AddProducto;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    color: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});


