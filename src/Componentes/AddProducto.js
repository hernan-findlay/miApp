import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import ButtonPrimary from './ButtonPrimary'; 



const AddProducto = ({ taskTitle, onHandlerTitle, addTask }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={taskTitle}
        onChangeText={onHandlerTitle}
        placeholder="Ingresar titulo"
        placeholderTextColor="white"
        maxLength={25}
        style={styles.input}
      />
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ButtonPrimary title="Agregar Producto" onPress={() => addTask(quantity)} />
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
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    color: 'white',
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
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});


