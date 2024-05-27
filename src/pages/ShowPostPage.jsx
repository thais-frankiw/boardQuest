import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const ShowPostPage = ({ id }) => {
  const baseUrl = 'https://boardquest-4e417-default-rtdb.asia-southeast1.firebasedatabase.app';
  const [post, setPost] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setMessage(null);

    fetch(`${baseUrl}/posts/${id}.json`)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Erro ao carregar o post');
        }
        return resp.json();
      })
      .then(post => setPost(post))
      .catch(error => setMessage(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleLike = () => {
    // Atualiza o número de curtidas do post
    const updatedPost = { ...post, numberOfLikes: post.numberOfLikes + 1 };
    setPost(updatedPost);
    // Add lógica para atualizar o firebase
  };

  const handleDislike = () => {
    // Atualiza o número de descurtidas do post
    const updatedPost = { ...post, numberOfDislikes: post.numberOfDislikes + 1 };
    setPost(updatedPost);
    // Add lógica para atualizar o firebase
  };

  const mostrarDetalhes = (id) => {
    console.log('Detalhes do post com id:', id);
  };

  return (
    <div>
      {isLoading && <p>Carregando...</p>}
      {message && <p>{message}</p>}
      {post !== null && (
        <div>
          {/* Renderiza o PostCard com os botões e passa a função mostrarDetalhes como prop action */}
          <PostCard post={post} showDetailsButton={false} action={mostrarDetalhes} handleLike={handleLike} handleDislike={handleDislike} />
        </div>
      )}
    </div>
  );
};

export default ShowPostPage;



