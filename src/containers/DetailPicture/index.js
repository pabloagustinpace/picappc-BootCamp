import React from 'react';
import CardDetail from '../../components/CardDetail';
import PictureApiInstance from './../../services/PictureApiService';

class DetailPicture extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      picture: {},
      error: null,
    }
  }

  async componentDidMount(){
    const { match } = this.props; 
    const { params } = match;
    const { idPicture } = params;

    if (idPicture.length > 0) { 
      PictureApiInstance.getPictureById(idPicture)
      .then(
        picture => {
          this.setState({
            picture,
          });
        }
      ).catch(
        error => this.setState({error})
      );
      
    }

  }

  render(){
    const { picture, error } = this.state;
    return(
      <div className="detail-picture">
        {
          error ? <h1> Ocurrió un errrorr!!!!!! </h1>
          : 
          !picture 
          ? <h2> No hay imagen cargada aún, esperando... </h2>
          : <CardDetail {...picture} />
        }
      </div>
    );
  }
}

export default DetailPicture;