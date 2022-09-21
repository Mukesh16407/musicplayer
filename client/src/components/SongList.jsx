import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const SongList = () => {

    const { currentSong, selectedPlaylist, allSongs } = useSelector(
        (state) => state.user
      );

      const [songsToPlay, setSongsToPlay] = useState([]);
      const dispatch = useDispatch();
      const [searchKey, setSearchKey] = useState("");
  return (
    <div className="flex flex-col gap-3">
        <div className="pl-3 pr-6">
            <input
            type="text"
            placeholder="Song , Artist , Album"
            className="rounded w-full"
            />

        </div>
        <div className="overflow-y-scroll h-[54vh] p-3">
            {songsToPlay.map((song, index)=>{
              const isPlaying = currentSong?._id === song._id;

              return(
                <div className={`p-2 text-gray-600 flex items-center justify-between cursor-pointer ${
                    isPlaying && "shadow rounded text-active font-semibold border-active border-2"
                  }`}>
                    <div>
                        <h1>{song.title}</h1>
                        <h1>{song.artist} {song.album} {song.year}</h1>
                    </div>
                    <div>
                      <h1>{song.duration}</h1>
                     </div>
                </div>
              )
            })}

        </div>
    </div>
  )
}
