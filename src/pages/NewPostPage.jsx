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

import React, { useState } from 'react';
import styled from 'styled-components'; 

const StyledButton = styled.button`
  background-color: #2a6496;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff8c00;
  }
`;

export default function NewPostPage() {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creatorUserName, setCreatorUserName] = useState('');
  const [keywords, setKeywords] = useState('');

  const baseUrl = 'https://boardquest-4e417-default-rtdb.asia-southeast1.firebasedatabase.app';

  // Gerar um ID único para o novo post
  const newId = Date.now();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const newPost = {
      id: newId,
      title,
      description,
      publicationDate: new Date().toISOString(),
      creatorUserName,
      keywords: keywords.split(',').map(keyword => keyword.trim()),
      comments: [],
      numberOfLikes: 0,
      numberOfDislikes: 0
    };

    fetch(`${baseUrl}/posts.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    }).then(response => response.json())
      .then(data => {
        setMessage('Salvo com sucesso.');
      })
      .catch(error => {
        setMessage(`Erro: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1 style={styles.newPostTitle}>Novo Post</h1>
      <section>
        {message && <p style={styles.message}>{message}</p>}
        {isLoading && <p style={styles.loading}>Carregando...</p>}
      </section>
      <form onSubmit={handleSubmit} style={styles.newPostForm}>
        <div style={styles.newPostFormDiv}>
          <label htmlFor="title" style={styles.newPostFormLabel}>Título: </label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={styles.newPostFormInput} required />
        </div>
        <div style={styles.newPostFormDiv}>
          <label htmlFor="description" style={styles.newPostFormLabel}>Descrição: </label>
          <input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} style={styles.newPostFormInput} required />
        </div>
        <div style={styles.newPostFormDiv}>
          <label htmlFor="creatorUserName" style={styles.newPostFormLabel}>Nome do usuário: </label>
          <input id="creatorUserName" type="text" value={creatorUserName} onChange={(e) => setCreatorUserName(e.target.value)} style={styles.newPostFormInput} required />
        </div>
        <div style={styles.newPostFormDiv}>
          <label htmlFor="keywords" style={styles.newPostFormLabel}>Palavras-chave (separadas por vírgula): </label>
          <input id="keywords" type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} style={styles.newPostFormInput} required />
        </div>
        <StyledButton type="submit" disabled={isLoading}>Adicionar Post</StyledButton>
      </form>
    </div>
  );
}

const styles = {
  newPostTitle: {
    fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
    fontSize: '48px',
    color: '#2a6496',
    textShadow: '2px 2px 3px #ff8c00',
    textAlign: 'center'
  },

  newPostForm: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  },

  newPostFormDiv: {
    marginBottom: '15px'
  },

  newPostFormLabel: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#2a6496',
  },

  newPostFormInput: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },

  message: {
    textAlign: 'center',
    margin: '10px 0',
    fontSize: '16px',
    color: '#2a6496',
  },

  loading: {
    textAlign: 'center',
    margin: '10px 0',
    fontSize: '16px',
    color: '#ff8c00',
  }
};

