import React from 'react';
import './App.css';

import Row from './components/Row'

import request from './requests'

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      {/* <Banner /> */}
      <Row title="Netflix Originals" url={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" url={request.fetchTrending}/>
      <Row title="Top Rated" url={request.fetchTopRated}/>
      <Row title="Action Movies" url={request.fetchActionMovies}/>
      <Row title="Comedy Movies" url={request.fetchComedyMovies}/>
      <Row title="Horror Movies" url={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" url={request.fetchRomanceMovies}/>
      <Row title="Documentaries" url={request.fetchDocumentaries}/>
      <Row />
    </div>
  );
}

export default App;
