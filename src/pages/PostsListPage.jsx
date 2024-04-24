

import React from 'react';
import PostsList from '../components/PostsList';  
import posts from '../data/posts'; 

const PostsListPage = () => {
  return (
    <div>
      <h1>Lista de Tópicos</h1>
      <h2>Últimas 10 postagens...</h2>
      <PostsList posts={posts} />
    </div>
  );
};

export default PostsListPage;