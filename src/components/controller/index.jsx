import JKT48NewEra from "../../assets/images/THIS_IS_JKT48_NEW_ERA.jpg";
import {
  AiOutlineHeart,
  AiOutlineStepBackward,
  AiOutlineStepForward,
} from "react-icons/ai";
import { BiPlay, BiRepeat, BiShuffle } from "react-icons/bi";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { HiOutlineQueueList } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { IoVolumeMedium } from "react-icons/io5";
import { BsArrowsAngleExpand } from "react-icons/bs";

function index() {
  return (
    <div className="control">
      <div className="control__song_detail">
        <img src={JKT48NewEra} alt="jkt48_newera_cover" />
        <div>
          <p>Musim Panas yang Kacau</p>
          <p>JKT48</p>
        </div>
        <AiOutlineHeart />
      </div>
      <div className="control__nav">
        <div className="control__upper">
          <button>
            <BiShuffle />
          </button>
          <button>
            <AiOutlineStepBackward />
          </button>
          <button className="play">
            <BiPlay />
          </button>
          <button>
            <AiOutlineStepForward />
          </button>
          <button>
            <BiRepeat />
          </button>
        </div>
        <div className="control__lower">
          <p>00.00</p>
          <div className="control__time_indicator"></div>
          <p>3.19</p>
        </div>
      </div>
      <div className="control__volume">
        <button>
          <PiMicrophoneStageBold />
        </button>
        <button>
          <HiOutlineQueueList />
        </button>
        <button>
          <LuMonitorSpeaker />
        </button>
        <div className="volume">
          <button>
            <IoVolumeMedium />
          </button>
          <div className="control__volume_indicator"></div>
        </div>
        <button>
            <BsArrowsAngleExpand/>
        </button>
      </div>
    </div>
  );
}

export default index;
