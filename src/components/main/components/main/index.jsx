/* eslint-disable react-hooks/rules-of-hooks */
import SongItemHead from "./components/song-item";
import PlaylistItem from './components/playlist-item'

import UserImage from "../../../../assets/images/user.jpg";
import JKT48NewEra from "../../../../assets/images/THIS_IS_JKT48_NEW_ERA.jpg";
import d4vdImage from "../../../../assets/images/d4vd.jpeg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useId, useState } from "react";

const songsHead = [
  {
    artist: "JKT48",
    image: "https://i.scdn.co/image/ab6761610000e5ebb048376ac8347c2f4aa2d731",
    background:'#F5F5F5'
  },
  {
    artist: "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE...",
    image: "https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f",
    background:'#FC14B6'
  },
  {
    artist: "HEROES & VILLAINS",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5f/Metro_Boomin_-_Heroes_%26_Villains.png",
      background:'#C69141'
  },
  {
    artist: "Joji",
    image: "https://i.scdn.co/image/ab676161000051744111c95b5f430c3265c7304b",
    background:'#E9EDEE'
  },
  {
    artist: "d4vd",
    image: d4vdImage,
    background:'#EA342C'
  },
  {
    artist: "THIS IS JKT48 NEW ERA",
    image: JKT48NewEra,
    background:'#CBA546'
  },
];

function index() {
  const songHeaderID = useId();
  const [background,setBackground] = useState(songsHead[0].background)

  function giveGreeting() {
    const hours = new Date().getHours();

    if (hours >= 0 && hours < 3) {
      return "Its been so late, you need to sleep!";
    }
    if (hours >= 3 && hours < 11) {
      return "Good morning!";
    }
    if (hours >= 11 && hours < 14) {
      return "Have a good day!";
    }
    if (hours >= 14 && hours < 18) {
      return "Good afternoon!";
    }
    return "Good night!";
  }
  return (
    <main>
      <div className="gradient-bg" style={{ background : `linear-gradient(${background},${background + '8b'},#252121)`,transition:"all 1s ease-in"}}/>
      <div className="main__contents">
        <div className="main__navigations">
          <button>
            <FaChevronLeft />
          </button>
          <button>
            <FaChevronRight />
          </button>
        </div>
        <h1 style={{ fontSize:'2rem' }}>{giveGreeting()}</h1>
        <div className="main__songs">
          {songsHead.map((song) => (
            <SongItemHead
              key={songHeaderID}
              setBackground={setBackground}
              background={song.background}
              image={song.image}
              artistName={song.artist}
            />
          ))}
        </div>
        <div className="main__made">
          <h3>Made for Sahrul Ramdan</h3>
          <div className="main__made_playlists">
            <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
            <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
            <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
            <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
            <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
            <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
            <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
            <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
            <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
          </div>
        </div>
        <div className="main__made">
          <h3>Made for Sahrul Ramdan</h3>
          <div className="main__made_playlists">
          <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
          <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
          <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
          <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
          <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
          <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
          <PlaylistItem image={UserImage} playlistTitle="Discover Weekly" description="Your weekly mixtape of albums. Enjoy ne..."/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default index;
