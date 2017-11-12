import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Saved from './components/Saved.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: '',
      items: [],
      storage: []
    };
  }

  handleSave(event) {
    if(this.state.items[event-1] !== undefined) {
       this.state.storage = this.state.storage.concat(this.state.items[event-1]);
    }
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
        'Authorization': 'Bearer BQDkc7fdb_WzGv-u3KcUqxDd7mgbwpp6hu1OUr4ph7vyC5C9aW203sFy8mbvA9ueN-FVvTDHXRFzvpQx_0JcfkXcFW0GigJY0WbkdKRNAiIAqG_i4enyw4SzuLtQUcACFVfHcnhZ_Iemjao'
      },
      success: (data) => {
        console.log('data retrieved', data);
        var counter = 0;
        data.tracks.items.forEach( element => {
            var obj = {
              query: this.state.query,
              artist: element.artists[0].name,
              url: element.preview_url,
              name: element.name,
              album: element.album.name,
              cover: element.album.images[0].url
            };
            $.ajax({
              type: 'POST',
              url: '/items', 
              data: obj,
              success: (info) => {
                console.log('data sent', info);
              },
              error: (err) => {
                console.log('err', err);
              }
            });
            counter = counter + 1;
            if(counter === 10){
              $.ajax({
                type: 'GET',
                url: '/items',
                data: {q: this.state.query},
                success: (data) => {
                  this.setState({items: JSON.parse(data)});
                  console.log('Fetched info from server', this.state.items);
                },
                error: (err) => {
                  console.log('Error fetching info from server');
                }
              });            
            }
        });
      },
      error: (err) => {
        console.log('err', err);
      }
      })
  }

  render () {
    if(this.state.storage.length > 0) {
        var storage = <Saved stored={this.state.storage} />
      }

    return (<div>
      <h1>Spotify: Top Tracks Preview</h1>
      <h4> So, what song are you in the mood for? </h4>
      <br></br> 
      <br></br> 
      {storage}
      <Search onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}/>
      <List items={this.state.items} onSave={this.handleSave.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));