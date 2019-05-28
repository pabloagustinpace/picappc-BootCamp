import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  content: {
    width: '18rem',
    margin : '0.5rem 0.5rem 0.5rem 0.5rem',
  }
};
const Card = ({ title, id}) => (
<div class="card" style={styles.content}>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Picture id : {id}</h6>
    <a href="#" class="card-link"><Link to={`/picture/${id}`}>Full Size</Link></a>
  </div>
</div>
)
    
export default Card;