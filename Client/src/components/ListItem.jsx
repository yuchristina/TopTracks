import React from 'react';

const ListItem = (props) => (
  <div className = 'items'>
  <li> Track name: {props.item.name} </li>
  <li> Artist: {props.item.artist} </li>
  <li> Album: {props.item.album} </li>
  <li> Preview: 
  <br></br> 
  <img src={props.item.cover} width='10%' height='10%' align='top'/>
  <audio controls>
  <source src={props.item.url} type="audio/ogg" />
  </audio>
  </li>
  </div>
)

export default ListItem;