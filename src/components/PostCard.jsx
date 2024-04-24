import React from 'react';
import styles from './PostCard.module.css'; 

const PostCard = ({ post }) => {
  // Função para calcular a diferença em dias entre a data de publicação e a data atual
  const getDateDifferenceInDays = (date) => {
    const publicationDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = currentDate - publicationDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  };

  // Calcula a diferença em dias
  const daysAgo = getDateDifferenceInDays(post.publicationDate);
  // Mensagem para exibir a diferença em dias
  const publicationDateMessage = daysAgo === 0 ? 'Hoje' : `${daysAgo} dia(s) atrás`;

  return (
    <div className={styles.postCard}>
      <h3>{post.title}</h3>
      <div>
        <p>{post.description.substring(0, 100)}...</p>
      </div>
      <div className={styles.publicationInfo}>
        <div>Publicado por: {post.creatorUserName}</div>
        <div>Publicado: {publicationDateMessage}</div>
      </div>
      <div className={styles.comments}>
        Comentários: {post.comments.length > 0 ? post.comments.length : 'Sem comentários.'}
      </div>
      <div className={styles.likes}>
        Curtidas: {post.numberOfLikes}
      </div>
      {post.numberOfDislikes != null && (
        <div className={styles.dislikes}>
          Descurtidas: {post.numberOfDislikes}
        </div>
      )}
    </div>
  );
};

export default PostCard;