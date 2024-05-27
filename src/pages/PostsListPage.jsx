import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const PostsListPage = ({ action }) => {
  const baseUrl = 'https://boardquest-4e417-default-rtdb.asia-southeast1.firebasedatabase.app';
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function convertData(data) {
      const ids = Object.keys(data);
      let values = Object.values(data);
      return values.map((post, index) => {
        return {
          id: ids[index],
          ...post
        };
      });
    }

    fetch(`${baseUrl}/posts.json`)
      .then(async (resp) => {
        if (!resp.ok) {
          throw new Error('Erro ao carregar os posts');
        }
        const respPosts = await resp.json();
        let convertedPosts = convertData(respPosts);
        setPosts(convertedPosts);
      })
      .catch(err => setMessage(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {message && (<p>{message}</p>)}
      {loading ? (
        <p>Carregando posts...</p>
      ) : (
        <div>
          {posts.length > 0 ? posts.map(post => (
            <PostCard key={post.id} post={post} action={action} />
          )) : <p>Sem posts disponíveis.</p>}
        </div>
      )}
    </div>
  );
};

export default PostsListPage;
