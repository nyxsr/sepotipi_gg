import LibraryIcon from "../../../../../../assets/svg/digital-library.svg";
import troImage from "../../../../../../assets/images/tro.jpeg";
import JKT48NewEra from "../../../../../../assets/images/THIS_IS_JKT48_NEW_ERA.jpg";
import d4vdImage from "../../../../../../assets/images/d4vd.jpeg";

import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowForward } from "react-icons/io";

import AlbumItem from "./components/album-item";
import ArtistItem from "./components/song-item";
import { BsSearch } from "react-icons/bs";
function index() {
  return (
    <div className="sidebar__library_nav">
      <div className="sidebar__library_head">
        <div className="sidebar__library_head_text">
          <img src={LibraryIcon} alt="stacked-for-library" />
          <p>My Library</p>
        </div>
        <div className="sidebar__library_icons">
          <button>
            <AiOutlinePlus />
          </button>
          <button>
            <IoMdArrowForward />
          </button>
        </div>
      </div>
      <div className="sidebar__library_types">
        <span>Playlists</span>
        <span>Albums</span>
        <span>Artists</span>
      </div>
      <div className="sidebar__search_section">
        <BsSearch />
        <select name="" id="">
          <optgroup label="Sort By">
            <option value="">Recents</option>
            <option value="">Recently Added</option>
            <option value="">Alphabetical</option>
            <option value="">Creator</option>
          </optgroup>
        </select>
      </div>
      <div className="sidebar__song_items">
        <AlbumItem image={JKT48NewEra} albumName={"THIS IS JKT48 NEW ERA"} />
        <ArtistItem image={d4vdImage} artistName={"d4vd"} />
        <ArtistItem image={troImage} artistName={"The Rare Occassions"} />
      </div>
    </div>
  );
}

export default index;
