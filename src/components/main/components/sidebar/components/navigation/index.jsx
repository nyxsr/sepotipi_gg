import { FiSearch } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'

function index() {
  return (
    <div className="sidebar__primary_nav">
            <a href="" className="sidebar__nav_item">
              <GoHome size={32}/>
              <span>Home</span>
            </a>
            <a href="" className="sidebar__nav_item">
              <FiSearch size={32}/>
              <span>Search</span>
            </a>
          </div>
  )
}

export default index
