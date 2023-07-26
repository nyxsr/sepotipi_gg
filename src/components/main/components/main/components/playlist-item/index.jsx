import React from 'react'

function index({image,playlistTitle,description}) {
  return (
    <div className="main__made_playlist">
              <div>
                <img src={image} alt="" />
              </div>
              <p>{playlistTitle}</p>
              <p>{description}</p>
            </div>
  )
}

export default index