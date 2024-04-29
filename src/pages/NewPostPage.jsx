/*import React, { useState } from 'react';
import NewPostForm from './components/NewPostForm';
import posts from './data/posts';

const NewPostPage = () => {
  const [allPosts, setAllPosts] = useState(posts);

  const addPost = (newPost) => {
    // Isso adicionaria o novo post à lista no estado, mas não ao arquivo `posts.js`
    setAllPosts(prevPosts => [...prevPosts, newPost]);
  };

  // Renderizar o formulário e a lista de posts
  return (
    <div>
      <NewPostForm addPost={addPost} />
      { Aqui você renderizaria seus posts }
    </div>
  );
};

export default NewPostPage;
*/