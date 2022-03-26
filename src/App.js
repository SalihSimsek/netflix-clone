import React from 'react';
import './App.css';

import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/Nav'

import request from './requests'

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" url={request.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" url={request.fetchTrending} />
      <Row title="Top Rated" url={request.fetchTopRated} />
      <Row title="Action Movies" url={request.fetchActionMovies} />
      <Row title="Comedy Movies" url={request.fetchComedyMovies} />
      <Row title="Horror Movies" url={request.fetchHorrorMovies} />
      <Row title="Romance Movies" url={request.fetchRomanceMovies} />
      <Row title="Documentaries" url={request.fetchDocumentaries} />
      <Row />
    </div>
  );
}

export default App;
