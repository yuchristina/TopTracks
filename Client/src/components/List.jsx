import React from 'react';
import ListItem from './ListItem.jsx';


const List = (props) => (
  <div>
    <h4> What track do you feel like? </h4>
    There are { props.items.length } songs.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;