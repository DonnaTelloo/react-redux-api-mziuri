import React from 'react'

function PhotosComponent({
    url
}) {
    return (
        <img src={url}  style={{
            width: 100,
            height: 100
        }}/>
    )
}

export default PhotosComponent
