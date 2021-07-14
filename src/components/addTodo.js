import React, {useState} from 'react'
import {View, Image,Text,TextInput, StyleSheet, TouchableWithoutFeedback, Modal, Button} from 'react-native'
import { black } from 'ansi-colors';
import {useDispatch} from 'react-redux'
import {addTodos} from '../redux/todoSplice'
import DatePicker from 'react-native-date-picker'

function AddTodo() {
   const [isVisible, setVisibility] = useState(false);
   const [text, setText] = useState('');
   const [date, setDate] = useState(new Date())
   const dispatch = useDispatch();
   const addtodo = () => {
       if(text) {
           dispatch(addTodos({
               task : text,
               date : new Date(date).toDateString()
           }))
       }
       setText('');
       setVisibility(false);
   }
    return (
      <View onPress style={style.addButton}>
      <Modal 
      style={{backgroundColor : '#edf7f5'}}           
          animationType = {"slide"}  
          transparent = {false}  
          visible = {isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style={style.modelContainer}> 
              <View style={style.popup}>
              <Text style ={style.head}>Add Todo</Text>
              <TextInput onChangeText={(event) => setText(event)}
        value={text} style={style.input} /> 
        <DatePicker
        androidVariant={'nativeAndroid'}
      date={date}
      onDateChange={setDate}
    /> 
              <View style={style.buttonGroup}>
              <Button
  onPress={() => addtodo()}
  title="Add"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Button
  onPress={() => setVisibility(!isVisible)}
  title="Close"
  color="#f194ff"
  accessibilityLabel="Learn more about this purple button"
/>
</View>
                  </View> 
          </View>  
        </Modal>  
      <TouchableWithoutFeedback onPress = {() => setVisibility(!isVisible)}>
          <Image source={require('../../assets/icons8-add-50.png')}></Image>
      </TouchableWithoutFeedback>
      </View>
    )
}

const style = StyleSheet.create({
    addButton : {
        alignItems : 'center'
    },
    head : {
     fontSize : 20,
     fontWeight : '500',
     marginBottom : 30
    },
    input :{
        borderRadius : 15,
        padding : 10,
        borderColor : black,
        borderWidth : 1
    },
    modelContainer :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#edf7f5'
    },
    popup : {
        backgroundColor : '#fff',
        minHeight : 200,
        width :300,
        paddingHorizontal : 10,
        borderRadius :10
    },
    buttonGroup: {
        justifyContent : 'space-around',
        flexDirection : "row",
        marginTop : 20,
        marginBottom : 20
    }
})

export default AddTodo
