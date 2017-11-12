import React from 'react';
import ListItem from './ListItem.jsx';


const List = (props) => (
  <div>
    <br></br>
    <br></br>
    There are { props.items.length } tracks from Spotify that match the query.
    { props.items.map(item => <ListItem key={item.id} id={item.id} item={item} onSave={props.onSave}/>)}
  </div>
)

export default List;