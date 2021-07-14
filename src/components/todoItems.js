import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {toogleCompleted, deleteTodoItem} from '../redux/todoSplice' 
import {useDispatch} from 'react-redux'

function TodoItems({id,completed, task, date}) {
    const dispatch = useDispatch()
    const toogleCheckbox = () => {
        dispatch(toogleCompleted({
            id : id,
        completed : !completed
        }))
    }
    const deleteTask = () => {
        dispatch(deleteTodoItem({
            id : id
        }))
    }
    return (
        <View style={style.item}>
            <View style={style.task}>
            <Text>{task}</Text>
            <Text> Time : {date}</Text>
            </View>
            <View style={style.actions}>
            <Text style={completed ? style.checked : style.checkbox} onPress={() => toogleCheckbox()} />
             <Text style={style.delete} onPress={() => deleteTask()}>X</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    item : {
        padding : 15,
        shadowOpacity : 0.5,
        backgroundColor : '#fff',
        borderRadius : 10,
        marginBottom : 10,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    checkbox : {
      width : 20,
      height : 20,
      borderRadius : 15,
      borderWidth : 1 ,
      marginRight : 5
    },
    checked : {
        width : 20,
        height : 20,
        borderRadius : 15,
        backgroundColor : 'green',
        marginRight : 5
      },
      actions : {
          flexDirection : 'row',
      },
      delete :{
          color : 'red',
          marginLeft : 5,
          fontSize : 15
      },
      task : {
          maxWidth : '80%'
      }
})

export default TodoItems
