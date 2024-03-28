import { useState } from "react"
// @ts-expect-error: No typing in use-sound as of now
import useSound from 'use-sound'
import daydreaming from "../../assets/sounds/Daydreaming.mp3";
import { CiPlay1, CiPause1  } from "react-icons/ci";
import './player.scss'


export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { pause }] = useSound(daydreaming)

  const handlePlay = () => {
    if(isPlaying) {
      pause()
      setIsPlaying(false)
    } else {
      play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="player">
      {
        isPlaying ? <CiPause1 onClick={handlePlay} /> : <CiPlay1 onClick={handlePlay} />
      }
    </div>
  )
}
