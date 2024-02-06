import { StyleSheet, Text, View ,Modal,Button } from 'react-native'

const ModalDeleteProducto = ({taskSelected,
                          deleteTask,
                          onHandlerModaDelete,
                          modalVisible}) => {

    return (
        <Modal
        visible={modalVisible}
        animationType='fade'
        onRequestClose={()=> onHandlerModaDelete({})}
        >
            <View>
            <Text>Ya compraste este producto:{taskSelected.title}</Text>
            <Button title='si' onPress={deleteTask}/>
            <Button title='no' onPress={()=> onHandlerModaDelete({})}/>
            </View>
        </Modal>
  )
}

export default ModalDeleteProducto

const styles = StyleSheet.create({


})