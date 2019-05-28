import React from 'react';
import Nav from '../../components/Nav';
import ListPicture from '../../containers/ListPicture';
import './style.scss';

const Home = () => {
  return(
    <div className="home-page">
      <Nav />
      <div className="container">
          <ListPicture />
      </div>
    </div>
  );
}

export default Home;