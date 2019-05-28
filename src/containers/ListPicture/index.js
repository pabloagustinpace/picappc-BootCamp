import React from 'react';
import Card from '../../components/Card';
import pictureService from './../../services/PictureApiService';

class ListPicture extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list : [],
    }
  }
  
  async componentDidMount(){
    const response = await pictureService.getAllPicture();
    const list = response;

    this.setState({
      list:list,
    });

  }
  
  render(){
    const { list } = this.state;
    return(
      <div className="list-picture">
        <h2> Mis imagenes {list.length}</h2>
        <div className="row">
          {
            list.map( (item, index) => <Card key={item.id} {...item}/>)
          }
        </div>
      </div>
    );
  }
}

export default ListPicture;