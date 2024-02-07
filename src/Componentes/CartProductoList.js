import { StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react';
import ButtonPrimary from './ButtonPrimary';

const CartProductoList = ({ item, onHandlerModaDelete, screenWidth, updateTaskCompleted, quantity }) => {
  return (
    <View style={[styles.taskCard, { width: screenWidth - 60 }]}>
      <Text style={styles.text}>Creacion: {item.createAt}</Text>
      <Text style={styles.text}>Titulo: {item.title}</Text>
      <Text style={styles.text}>Cantidad: {quantity}</Text> {/* Muestra la cantidad aquí */}
      
      <ButtonPrimary title='Borrar' onPress={() => onHandlerModaDelete(item)} />
    </View>
  );
};

export default CartProductoList;

const styles = StyleSheet.create({
    taskCard:{
        backgroundColor:"#872FF5",
        padding:20,
        marginHorizontal:10,
        marginVertical:10,
        alignItems:"flex-start",
        borderRadius:5,
        gap:25
      },
      text:{
        width:"100%",
        color:"black",
        fontSize:18
      },
     
    textCompleted:{
        color:"black",
        fontSize:16,
        fontWeight:"bold"
    }
})