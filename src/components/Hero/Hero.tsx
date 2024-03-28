import './hero.scss'
import PageHeader from '../PageHeader/PageHeader'
import Player from '../Player/Player'
import { useState } from 'react'

function Hero() {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false)

  const handleClick = () => {
    setIsPlayerVisible(true)
  }

  const getFadeClass = () => {
    if(isPlayerVisible) {
      return 'fade'
    } else {
      return ''
    }
  }

  return (
    <div className='homepage-wrapper'>
      <div className='circle is-flex is-justify-content-center is-align-items-center is-clickable' onClick={handleClick}>
        { isPlayerVisible && <Player />}
      </div>
      <div className={`is-clickable ${getFadeClass()}`} onClick={handleClick}>
        <PageHeader title='Al-Mudawwar' />
      </div>
    </div>
  )
}

export default Hero
