import React from 'react'
import { Player } from '../components/Player'
import { PlayList } from '../components/PlayList'
import { SongList } from '../components/SongList'



export const Home = () => {
  return (
    <>
      <div className="flex gap-5">
      <div className="w-1/2">
        <SongList/>
      </div>
      <div className="w-1/2">
          <PlayList />
        </div>
      </div>
      <Player/>
    </>
  )
}
