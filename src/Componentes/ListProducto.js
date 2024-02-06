import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React from 'react'
import CartProductoList from './CartProductoList'

const ListProducto = ({tasks,onHandlerModaDelete,screenWidth,updateTaskCompleted}) => {

  return (
    <View style={styles.tasksContainer}>
        <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item})=>(<CartProductoList 
                                    item={item} 
                                    onHandlerModaDelete={onHandlerModaDelete}
                                    screenWidth={screenWidth}
                                    updateTaskCompleted={updateTaskCompleted}
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