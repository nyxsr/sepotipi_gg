function index({image,albumName}) {
  return (
    <div>
      <div className="sidebar__song_item">
                <img
                  src={image}
                  alt={albumName}
                />
                <div className="sidebar__song_detail">
                  <p>{albumName}</p>
                  <p>Album</p>
                </div>
              </div>
    </div>
  )
}

export default index
