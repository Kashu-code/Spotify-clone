import React, { useRef, useContext } from 'react'
import Sidebar from './component/Sidebar'
import Display from './component/Display'
import Player from './component/Player'
import { PlayerContext } from './context/PlayerContext'

function App() {
    const { audioRef, track } = useContext(PlayerContext); // Use useContext to get values from context
    
    return (
        <>
            <div className="h-screen bg-black">
                <div className="h-[90%] flex ">
                    <Sidebar />
                    <Display/>
                </div>
                <Player/>
                <audio ref={audioRef} src={track.file} preload='auto'></audio>
            </div>
        </>
    )
}

export default App  