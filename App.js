/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useSelector} from 'react-redux'
import TodoList from './src/components/todoList'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [view , setview] = useState('all')
  const todos = useSelector(state => state.todos)
  return (
    <SafeAreaView  style={style.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
        >
       <TodoList view ={view}/>
      </ScrollView>
      <View style={{justifyContent : 'space-between' , flexDirection : 'row'}}>
        <Text style={{color : view === 'all' ? 'green' : 'black'}} onPress={ () => setview('all')}>Total : {todos.length} </Text>
        <Text>|</Text>
        <Text style={{color : view === 'completed' ? 'green' : 'black'}} onPress={ () => setview('completed')}>Completed : {todos.filter( (todo) => todo.completed).length} </Text>
        <Text>|</Text>
        <Text style={{color : view === 'pending' ? 'green' : 'black'}} onPress={ () => setview('pending')}>Pending : {todos.filter( (todo) => !todo.completed).length} </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container : {
    minHeight : '100%',
    backgroundColor: '#edf7f5',
    paddingHorizontal : 30,
    paddingVertical : 50,
    position : 'relative',
    flex : 1
  }
})

export default App;
