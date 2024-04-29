/*import React, { useState } from 'react';

const NewPostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creatorUserName, setCreatorUserName] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gerar um ID único para o novo post - em um cenário real, isso seria gerado pelo back-end ou banco de dados
    const newId = Date.now(); 

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

    // Simula adição do novo post ao arquivo posts.js
    addPost(newPost);

    // Limpa o formulário após submissão
    setTitle('');
    setDescription('');
    setCreatorUserName('');
    setKeywords('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Criar Novo Post</h3>
      <label>
        Título:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Descrição:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Nome do Usuário:
        <input type="text" value={creatorUserName} onChange={(e) => setCreatorUserName(e.target.value)} required />
      </label>
      <label>
        Palavras-chave (separadas por vírgula):
        <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
      </label>
      <button type="submit">Adicionar Post</button>
    </form>
  );
};

export default NewPostForm;
*/