import React from 'react';
import YoutubeBackground from 'react-youtube-background'
// import logo from './logo.svg';
import './App.css';
import SearchMovies from './SearchMovies';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        {/* <img
          src='/public/zFlix_192_white.png'
          className='App-logo'
          alt='zFlix Logo'>
          </img> */}
        <h1>Search-O-Flix</h1>
      </header>
      <div className="container">
        {/* <h1 className="title">Search your movie</h1> */}
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;
