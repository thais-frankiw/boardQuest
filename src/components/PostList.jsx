import React from 'react';
import PostCard from './PostCard';

const PostsList = ({ posts }) => {
  // Ordena os posts pela data de publicação do mais recente para o mais antigo
  const sortedPosts = posts.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));

  // Seleciona apenas os 10 últimos tópicos
  const latestPosts = sortedPosts.slice(0, 10);

  return (
    <div>
      {latestPosts.map((post) => (
        <PostCard
          key={post.id}
          post={{
            ...post,
            numberOfDislikes: null
          }}
        />
      ))}
    </div>
  );
};

export default PostsList;
