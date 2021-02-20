import { createStore, applyMiddleware } from "redux";
import { GET_PHOTOS, GET_POSTS, SEARCH_POSTS } from "./constants";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {
    Posts: [],
    Photos: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POSTS: return {
            ...state,
            Posts: [...action.payload]
        }
        case GET_PHOTOS: return {
            ...state,
            Photos: [...action.payload]
        }
        case SEARCH_POSTS:
            const filteredData = state.Posts.filter(item => {
                if(item.title.toLowerCase().includes(action.payload.toLowerCase())){
                  return item
                }
            })
            console.log(filteredData)
            return {
                ...state,
                Posts: [...filteredData]
            }
        default: return state
    }
}

const store = createStore(Reducer,
    applyMiddleware(thunk, logger));

export default store;