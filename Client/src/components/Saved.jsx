import React from 'react';

const Saved = (props) => (
  <div className = 'saved'>
  Library of Songs
  {props.stored.map(item => 
  <div key={null || item.id}>
      <br></br> 
	  <li> Track name: {null || item.name} </li>
	  <li> Artist: {null || item.artist} </li>
	  <li> Album: {null || item.album} </li>
	  <li> Preview: 
	  <br></br> 
	  <img src={null || item.cover} width='10%' height='10%' align='top'/>
	  <audio controls>
	  <source src={null || item.url} type="audio/ogg" />
	  </audio>
	  </li>
  </div>
  	)}


  </div>
)

export default Saved;
