import "./App.css";
import React from 'react';
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <>
      <div className="container">
        <nav className="navBar">
          <a className="navLink" href="https://globo.com">Home</a>
          <a className="navLink" href="https://globo.com">Posts</a>
          <a className="navLink" href="https://globo.com">Novo Post</a>
        </nav>
      </div>
      < HomePage />
    </>
  );
}
