import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSplice'

export default configureStore({
    reducer : {
        todos : todoReducer
    }
})