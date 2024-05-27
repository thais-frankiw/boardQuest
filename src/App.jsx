import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import PostsListPage from './pages/PostsListPage';
import NewPostPage from './pages/NewPostPage';
import ShowPostPage from './pages/ShowPostPage';

export default function App() {
  const [page, setPage] = useState(0);
  const [selectedPostId, setSelectedPostId] = useState(null);

  function mostrarDetalhes(id) {
    setSelectedPostId(id);
  }

  function navegate(page) {
    setSelectedPostId(null);
    setPage(page);
  }

  function getPage() {
    if (selectedPostId){
      return <ShowPostPage id={selectedPostId} />;
    } else {
      switch (page) {
        case 0:
          return <HomePage />;
        case 1:
          return <PostsListPage action={mostrarDetalhes} />;
        case 2:
          return <NewPostPage />;
        default:
          return <HomePage />;
      }
    }

  }

  return (
    <div>
      <nav className="navBar">
        <span className="navTitle" onClick={() => navegate(0)}>Home</span>
        <span className="navTitle" onClick={() => navegate(1)}>Posts</span>
        <span className="navTitle" onClick={() => navegate(2)}>Novo Post</span>
      </nav>
      {getPage()}
    </div>
  );
}



