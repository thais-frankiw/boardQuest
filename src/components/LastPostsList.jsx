import PostCard from './PostCard';

const title = {
  color: '#ff8c00',
  fontSize: '36px',
  textShadow: '1px 1px 2px #2a6496',
  textAlign: 'center',
}


const LastPostsList = (props) => {
  const posts = props.posts;
  
  // Ordena os posts pela data de publicação do mais recente para o mais antigo
  const sortedPosts = posts && posts.length > 0
  ? posts.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate))
  : [];
  
  // Seleciona apenas os 10 últimos tópicos
  const latestPosts = sortedPosts.slice(0, 10);

  return (
    <div>
      <h2 style={title}>Últimas 10 postagens...</h2>
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

export default LastPostsList;


