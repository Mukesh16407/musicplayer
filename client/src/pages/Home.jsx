import React from 'react'
import { SongList } from '../components/SongList'



export const Home = () => {
  return (
    <>
      <div className="flex gap-5">
      <div className="w-1/2">
        <SongList/>
      </div>
      </div>
    </>
  )
}
