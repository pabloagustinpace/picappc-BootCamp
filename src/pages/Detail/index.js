import React from 'react';
import Nav from '../../components/Nav';
import DetailPicture from '../../containers/DetailPicture';

const Detail = (props) => {
  return (
    <div className="detail-page">
      <Nav />
      <div className="container">
        <DetailPicture {...props}/>
      </div>
    </div>
  );
}

export default Detail;