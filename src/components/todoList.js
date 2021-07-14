import React , {useRef, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import TodoItems from './todoItems';
import {useSelector} from 'react-redux'
import AddTodo from '../components/addTodo'

function TodoList(prop) {
    const todos = useSelector(state => state.todos)
    let filtered = todos
    const prevView = usePrevious({ view :prop.view});
    React.useEffect( () => {
      if(prevView && prevView.view && prevView.view !== prop.view){
          switch (prop.view) {
              case 'completed':
                filtered = todos.filter(todo => todo.completed)
                  break;
             case 'pending':
               filtered = todos.filter(todo => !todo.completed) 
                    break;
              default:
              filtered = todos
                  break;
          }
      }
    })
    return (
       <View>
           <View style={{flexDirection: 'row', justifyContent : 'space-between'}}>
           <Text style={style.heading}>Today's Tasks</Text>
           <AddTodo style={style.addicon} />
           </View>
           {/* {filtered.map(todo => (
            <TodoItems key={todo.id} id={todo.id} completed={todo.completed} task={todo.task} date={todo.date}/>
           ))} */}
          {prop.view === 'all' && <FilterAll filtered={filtered}/>} 
          {prop.view === 'completed' && <FilterCompleted filtered={filtered}/>}
          {prop.view === 'pending' && <FilterPending filtered={filtered}/>} 
       </View>
    )
}

function FilterAll (props){
     return (
        props.filtered.map(todo => (
            <TodoItems key={todo.id} id={todo.id} completed={todo.completed} task={todo.task} date={todo.date}/>
           ))
     )   
}

function FilterCompleted (props){
    return (
       props.filtered.map(todo => (
         todo.completed &&  <TodoItems key={todo.id} id={todo.id} completed={todo.completed} task={todo.task} date={todo.date}/>
          ))
    )   
}

function FilterPending (props){
    return (
       props.filtered.map(todo => (
         !todo.completed &&  <TodoItems key={todo.id} id={todo.id} completed={todo.completed} task={todo.task} date={todo.date}/>
          ))
    )   
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

const style = new StyleSheet.create({
    heading: {
          fontSize : 20,
          fontWeight: '500',
          textAlign : 'center',
          marginBottom : 40
    },
    addicon : {
      position : 'absolute',
      right : 0,
      top : 0
    }
})

export default TodoList
