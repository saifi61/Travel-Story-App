import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import ProfileInfo from "./Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "./Input/SearchBar";

const Navbar = ({ userInfo, searchQuery, setSearchQuery, onSearchNote, handleClearSearch }) => {
  const isToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    } 
  };
  const onClearSearch = () => {
    handleClearSearch();
    setSearchQuery("");
  };

  return (
    <div
      className="bg-white flex items-center justify-between px-6 py-2
        drop-shadow sticky top-0 z-10 "
    >
      <img src={logo} alt="travel story" className="w-auto h-12" />

      {isToken && (
        <>
          <SearchBar
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />

          <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </>
      )}
    </div>
  );
};

export default Navbar;