import React from 'react';
import ListItem from './ListItem.jsx';


const List = (props) => (
  <div>
    <h4> So, what song are you in the mood for? </h4>
    <br></br>
    <br></br>
    There are { props.items.length } tracks from Spotify that match the query.
    { props.items.map(item => <ListItem key={item.id} item={item}/>)}
  </div>
)

export default List;