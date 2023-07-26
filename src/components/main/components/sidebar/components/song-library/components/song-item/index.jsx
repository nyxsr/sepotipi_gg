import React from 'react'

function index({image,artistName}) {
  return (
    <div className="sidebar__song_item">
                <img
                  className="artist"
                  src={image}
                  alt={artistName}
                />
                <div className="sidebar__song_detail">
                  <p>{artistName}</p>
                  <p>Artist</p>
                </div>
              </div>
  )
}

export default index