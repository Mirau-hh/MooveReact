import React, {Component} from 'react';
import './styles.css';

//Router
import {withRouter} from 'react-router-dom';

//Video player
import ReactPlayer from 'react-player'


export class Films extends Component {
  constructor() {
    super();
    this.state = {
        api_key: 'f7935cd563a9169522a96c62d2fd7106', //La Api Key deberia estar en backend.
        trailer_key: '',
        title: '',
        description: '',
        fetch_status: '',
    }
  }

  render(){
    const { history } = this.props;
    
    switch(this.state.fetch_status){
      case 'ERROR': {
        return(
          <div className="container" data-test="div-test">
            <div className="row mt-4">
              <div className="col-md-16">
                <h1>Something went wrong :(</h1>
              </div>
            </div>
          </div>
        );
      }
      case 'OK': {
        return(
          <div className="container" data-test="div-test">
            <div className="row mt-4">
              <div className="col-md-16">
                  <div >
                    <ReactPlayer url={"https://www.youtube.com/watch?v=" + this.state.trailer_key} allow="autoplay" playing height="600px" width="auto"/>
                  </div>
                <div>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.description}</p>
                    <button onClick={()=> history.goBack()} className="btn btn-primary" >Go Back</button>
                </div>
              </div>
            </div>
          </div>
        );
      }
      default:
        return(
          <div className="container" data-test="div-test">
            <div className="row mt-4">
              <div className="col-md-16">
                <h1>Loading...</h1>
              </div>
            </div>
          </div>
        );
  }
    

  }

  componentDidMount(){
    
    const {match} = this.props;
    let id = match.params.id;
    
    this.fetchTrailer(id);
    this.fetchDetails(id);
  }

  fetchDetails(id){
    this.setState({
      fetch_status: 'FETCHING',
    });
    fetch("https://api.themoviedb.org/3/movie/"+ id +"?api_key=" + this.state.api_key + "&language=en-US")
    .then(res => res.json())
    .then((data) => {
      console.log('details-fetch', data);
      if(!data.hasOwnProperty('overview')){ //Si el resultado no tiene results -> ERROR
        this.setState({
          fetch_status: 'ERROR',
        });
      }
      else{
        this.setState({
          title: data.original_title,
          description: data.overview,
          fetch_status: 'OK',
        })
      }
    })
    .catch(console.log)
  }

  fetchTrailer(id){
    this.setState({
      fetch_status: 'FETCHING',
    });
    fetch("https://api.themoviedb.org/3/movie/"+ id +"/videos?api_key=" + this.state.api_key)
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