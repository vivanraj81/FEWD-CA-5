import React from "react";
import logo from "../assets/Kalvium-Logo-SVG.svg";
import "./NavBar.css";
import { AiOutlineHome } from "react-icons/ai";

const NavBar = (props) => {
  const { handleSearch, setPage } = props;

  return (
    <div className="NavBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => handleSearch(e.target.value.trimStart())}
        />
      </div>

      <div className="nav-left">
        <div className="nav-reg" onClick={() => setPage(false)}>
          <button>Sign Up</button>
        </div>
        <div className="ques-blk" onClick={() => setPage(true)}>
          <button>
            <AiOutlineHome className="home-btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;