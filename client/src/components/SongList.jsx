import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetCurrentSong, SetCurrentSongIndex, SetSelectedPlaylist } from '../redux/userSlice';

export const SongList = () => {

    const { currentSong, selectedPlaylist, allSongs } = useSelector(
        (state) => state.user
      );

      const [songsToPlay, setSongsToPlay] = useState([]);
      const dispatch = useDispatch();
      const [searchKey, setSearchKey] = useState("");

      useEffect(()=>{
        if (selectedPlaylist){
          if (selectedPlaylist && selectedPlaylist.name === "All Songs" &&
            searchKey !== ""){
              const tempSongs = [];
              selectedPlaylist.songs.forEach((song) => {
             if (JSON.stringify(song).toLowerCase().includes(searchKey)) {
                  tempSongs.push(song);
                }
              });
              console.log(tempSongs);
             setSongsToPlay(tempSongs);
            }else{
              setSongsToPlay(selectedPlaylist?.songs);
            }
        }
      },[selectedPlaylist, searchKey])
  return (
    <div className="flex flex-col gap-3">
        <div className="pl-3 pr-6">
            <input
            type="text"
            placeholder="Song , Artist , Album"
            className="rounded w-full"
            onFocus={() =>
              dispatch(
                SetSelectedPlaylist({
                  name: "All Songs",
                  songs: allSongs,
                })
              )
            }
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            />

        </div>
        <div className="overflow-y-scroll h-[54vh] p-3">
            {songsToPlay.map((song, index)=>{
              const isPlaying = currentSong?._id === song._id;

              return(
                <div className={`p-2 text-gray-600 flex items-center justify-between cursor-pointer ${
                    isPlaying && "shadow rounded text-active font-semibold border-active border-2"
                  }`}
                  onClick={() => {
                    dispatch(SetCurrentSong(song));
                    dispatch(SetCurrentSongIndex(index));
                  }}>
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
