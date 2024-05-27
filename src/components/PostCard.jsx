import React, { useState } from 'react';
import styles from './PostCard.module.css';

const PostCard = ({ post, showDetailsButton, action }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getDateDifferenceInDays = (date) => {
    const publicationDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = currentDate - publicationDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const daysAgo = getDateDifferenceInDays(post.publicationDate);
  const publicationDateMessage = daysAgo === 0 ? 'Hoje' : `${daysAgo} dia(s) atrás`;

  return (
    <div className={styles.postCard}>
      <h3>{post.title}</h3>
      <div>
        {showDetails ? (
          <p>{post.description}</p>
        ) : (
          <p>{post.description.substring(0, 100)}...</p>
        )}
      </div>
      <div className={styles.comments}>
        Comentários: {post.comments ? post.comments.length : 'Sem comentários.'}
        {showDetails && post.comments && (
          <ul>
            {post.comments.map((comment) => (
              <li key={comment.commentId}>
                <div>
                  <strong>User: {comment.userName}</strong> 
                  <p>Comentário: {comment.commentText} </p>
                </div>
                <div>{formatDate(comment.commentDate)}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.likes}>
        Curtidas: {post.numberOfLikes}
      </div>
      {post.numberOfDislikes != null && (
        <div className={styles.dislikes}>
          Descurtidas: {post.numberOfDislikes}
        </div>
      )}
      <div className={styles.publicationInfo}>
        <div>Publicado por: {post.creatorUserName}</div>
        <div>Publicado: {publicationDateMessage}</div>
      </div>
      {showDetailsButton && (
        <button className={styles.button} onClick={() => action(post.id)}>
          Mostrar Detalhes
        </button>
      )}
    </div>
  );
};

export default PostCard;
