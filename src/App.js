import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux'
import { getPosts, getPhotos, searchPosts } from './redux/actions';
import PostsComponent from './components/posts'
import PhotosComponent from './components/photos'
const App = () => {

  const dispatch = useDispatch();

  const {
    Posts,
    Photos
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(getPosts())
    dispatch(getPhotos())
  }, [])

  useEffect(() => {
    console.log(Posts)
    console.log(Photos)
  },[Posts, Photos])

  const searchHandler = (keyword, key) => {
    if(key == "Enter" && keyword !== ""){
      dispatch(searchPosts(keyword))
    }else if(keyword == ""){
      dispatch(getPosts())
    }
  }

  return(
    <React.Fragment>
      <input type="text" onKeyPress={(event) => searchHandler(event.target.value, event.key)}/>
      { Posts.length > 0 && (
        Posts.map(item => {
          return(
            <PostsComponent
              key={item.id}
              title={item.title}
              desc={item.body}
            />
          )
        })
      ) }
      {
        Photos.length > 0 && (
          Photos.map(item => {
            return <PhotosComponent url={item.url} />
          })
        )
      }
    </React.Fragment>
  )
}

export default App;