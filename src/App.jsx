
import './App.css'
import { useState } from 'react';
import FirstData from './components/FirstData/FirstData'
import Message from './components/Message'
import MusicChoise from './components/MusicChoise/MusicChoise'
import CheckGo from './components/CheckGo/CheckGo'
import Gif from './components/Gif/Gif'
import Location from './components/Location'
import CountDown from './components/CountDown'
import ModalName from './components/ModalName'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrousel from './components/Carrousel/Carrousel';



function App() {
  const [userName, setUserName] = useState(null);

  return (
    <>
      <div className='appContainer'>
        {!userName && (
        <ModalName onAccessGranted={(name) => setUserName(name)} />
      )}
        {userName && (
    <>
      <div className='upperHalf halfScreen'>
<div className='elegantHeader'>
  {userName.toLowerCase() === 'nahuel'
    ? 'Cuervo trolo 🎂 Esta app es para vos ❤️'
    : `¡Hola ${userName}!, estás invitado al cumpleaños de Nahuel 🎉`}
</div>
        <FirstData />
        <Carrousel userName={userName} />
        
        <div className='doble'>
        <CountDown />
        <CheckGo />
        </div>

      </div>

      <div className='lowerHalf halfScreen'>
        <div className='quadrant'><Message /></div>
        <div className='quadrant'><MusicChoise /></div>
        <div className='quadrant'><Gif /></div>
        <div className='quadrant'><Location /></div>
            <div className='lowerHalfFooter'>
              © 2025 Una app mas - Hecha con amor (o no)
            </div>
      </div>
    </>
  )}
      </div>
    </>
  )
}

export default App
