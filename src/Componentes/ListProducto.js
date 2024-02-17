import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React from 'react'
import CartProductoList from './CartProductoList'

const ListProducto = ({tasks,onHandlerModaDelete,screenWidth,updateTaskCompleted,handlerTaskUpdateSelected, contador}) => {

  
  return (
    <View style={styles.tasksContainer}>
        <FlatList
        vertical={true}
        pagingEnabled={true}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item})=>(<CartProductoList 
                                item={{ ...item, contador: item.contador }}
                                onHandlerModaDelete={onHandlerModaDelete}
                                screenWidth={screenWidth}
                                contador={contador}
                                handlerTaskUpdateSelected={handlerTaskUpdateSelected}
                                    />)}
        />
  
    </View>
  )
}

export default ListProducto

const styles = StyleSheet.create({
    tasksContainer:{
        padding:10
      }
})