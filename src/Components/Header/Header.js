import React from 'react';
import './Header.css';
import api from "../../Services/api";

function Header() {

  async function logof() {
    await api.post("/logout");
    localStorage.setItem("user", null);
    window.location.reload();

  }

  let button, user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    button = (      
      <div>
        <a href="/login">Login</a>
      </div>      
    );
  } else {
    button = (
    <>
      <div>
          {user.nickName}
      </div>
      <button className="logof-button" onClick={logof} >Logof</button>
    </>
    )

  }

  return (
    <header>
      <div className="header-item">
        <a href="/">Home</a>
      </div>
      {button}

    </header>
  );
}


export default Header;
