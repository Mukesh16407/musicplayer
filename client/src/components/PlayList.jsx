import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HideLoading, ShowLoading } from "../redux/alertSlice";

export const PlayList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, allSongs, selectedPlaylist } = useSelector(
    (state) => state.user
  );
  
  return (
    <div>
      <div className="flex justify-between w-full">
        <h1 className="text-secondary text-2xl">Your Playlists</h1>
        <h1 className="underline cursor-pointer text-xl text-secondary">
          Create Playlist
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-10">
        
         
            <div
              className={`flex flex-col gap-1 shadow border rounded p-2 cursor-pointer ${"border-active border-2"
              }`}
            >
              <h1 className="text-3xl">Name</h1>
              <h1 className="text-xl">5</h1>
              <hr />
              <div className="flex gap-3 justify-between">
                <i className="ri-delete-bin-line text-2xl text-gray-500"></i>
                <i className="ri-pencil-line text-2xl text-gray-500"></i>
              </div>
            </div>
          
        
      </div>
    </div>
  );
};
