import axios from "axios"
import { GET_POSTS, GET_PHOTOS, SEARCH_POSTS } from "./constants"

export const getPosts = () => async dispatch => {
    await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
    }).then(response => {
        if(response.status == 200){
            dispatch({
                type: GET_POSTS,
                payload: response.data.splice(0, 5)
            })
        }
    })
}

export const getPhotos = () => async dispatch => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: GET_PHOTOS,
                payload: data.splice(0, 5)
            })
        })
}

export const searchPosts = (keyword) => {
    return{
        type: SEARCH_POSTS,
        payload: keyword
    }
}