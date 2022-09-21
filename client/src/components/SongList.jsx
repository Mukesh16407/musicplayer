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
        <div>
            
        </div>
    </div>
  )
}
