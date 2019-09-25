import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './styles.css';

import ReactPlayer from 'react-player'

class Films extends Component {
  constructor() {
    super();
    this.state = {
        api_key: 'f7935cd563a9169522a96c62d2fd7106',
        trailer_key: '',
        title: '',
        description: '',
        fetch_status: '',
    }
  }

  render(){
    return(
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-16">
              <div>
                <ReactPlayer url={"https://www.youtube.com/watch?v=" + this.state.trailer_key} allow="autoplay" playing/>
              </div>
            <div>
                <h1>Film</h1>
                <p>Lorem ipsum dolor sit a </p>
              </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    
    const {match} = this.props;
    let id = match.params.id;
    
    this.fetchTrailer(id);
    this.getDetails(id);
  }

  getDetails(id){
    //Get from redux
  }

  fetchTrailer(id){
    this.setState({
      fetch_status: 'FETCHING',
    });
    fetch("http://api.themoviedb.org/3/movie/"+ id +"/videos?api_key=" + this.state.api_key)
    .then(res => res.json())
    .then((data) => {
      console.log('trailer_fetch', data);
      if(!data.hasOwnProperty('results')){ //Si el resultado no tiene results -> ERROR
        this.setState({
          fetch_status: 'ERROR',
        });
      }
      else{
        this.setState({
          trailer_key: data.results[0].key,
          fetch_status: 'OK',
        })
      }
    })
    .catch(console.log)
  }
}

export default withRouter(Films);