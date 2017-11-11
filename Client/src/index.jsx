import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: '',
      items: []
    };
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }


//get new token here: https://developer.spotify.com/web-api/console/get-search-item/
  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.spotify.com/v1/search', 
      data: {
        'q': this.state.query, 
        'type': 'track',
        'limit': 10,
        'market': 'US'
      },
      headers: {
        'Authorization': 'Bearer BQDuGDCiQvIegKTFwgRg2ZlGCcNbtRWVNAbCLhEMe5WwP4PCqvdCEjjhfHbhEmHS5atFU0ncKV6nzJ1oNwrD2bA_P1PglEobUHqd8xindUaL9gA4dhG3sY3GE5oS0ijNh7o0meVEiSisvDY'
      },
      success: (data) => {
        console.log('data retrieved', data);
        var tracksArray = [];
        data.tracks.items.forEach( element => {
            var obj = {
              artist: element.artists[0].name,
              url: element.preview_url,
              name: element.name,
              album: element.album.name,
              cover: element.album.images[0].url
            };
            // tracksArray.push(obj);
            // if(tracksArray.length === data.tracks.items.length) {
            //   console.log('ORIGINAL', tracksArray);
            $.ajax({
              type: 'POST',
              url: '/items', 
              data: obj,
              success: (info) => {
                console.log('data sent', info);
              },
              error: (err) => {
                console.log('err', err);
              },
              });
            });
      },

      error: (err) => {
        console.log('err', err);
      }
      })
  }

  render () {
    return (<div>
      <h1>Spotify: Top Tracks Preview</h1>
      <Search onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}/>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));