import React from 'react';  
import posts from '../data/posts';
import LastPostsList from '../components/LastPostsList';

const banner = {
  width: '100%',
  height: '300px', 
  backgroundColor: '#b0c4de',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const bannerTitle = {
  fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
  fontSize: '48px',
  color: '#2a6496',
  textShadow: '2px 2px 3px #ff8c00'
};

function HomePage() {
  return(
    <div>
      <div style={banner}>
        <h1 style={bannerTitle}>BoardQuest</h1>
      </div>
      <LastPostsList posts={posts}/>
    </div>
  );
}

export default HomePage;