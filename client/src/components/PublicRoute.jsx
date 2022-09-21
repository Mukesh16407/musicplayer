/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
          navigate("/");
        }
      }, []);
  return (
    <div>{children}</div>
  )
}
