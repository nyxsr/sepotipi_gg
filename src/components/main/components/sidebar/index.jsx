import { FiSearch } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'



import Navigation from './components/navigation'
import SongLibrary from './components/song-library'

function index() {
  return (
    <nav>
          <Navigation/>
          <SongLibrary/>
        </nav>
  )
}

export default index
