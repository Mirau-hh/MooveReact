import React, {Component} from 'react';
import './styles.css';

import {withRouter} from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {
        page: 1,
        api_key: 'f7935cd563a9169522a96c62d2fd7106',
        films: [],
    }
    this.fetchFilms = this.fetchFilms.bind(this);
  }

  render(){
    const { history }  = this.props;

    console.log(this.state.films)
    const display_films = this.state.films.map((film, i) => {
      return (
        <div className="col-md-4" key = {i}>
          <div className="card mt-4">
            <div className="card-title text-center pb-0">
              <div className="align-bottom">
                <h3 className="limitH">{film.title}</h3>
              </div>              
            </div>
            <div className="card-body pt-0" >
              <div className="d-flex justify-content-center">
                <img className ="limitImg" src={"http://image.tmdb.org/t/p/w342" + film.poster_path} alt="poster"/>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center">
                <button
                    className="btn btn-primary"
                    onClick={() => history.push('/film/' + film.id)}>
                    Watch
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-16">
            <div className="row">
              {display_films}
            </div>
            <div className="p-5 text-center">
              <button
                    className="btn btn-success"
                    onClick={this.fetchFilms}>
                    Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.fetchFilms();
  }

  fetchFilms(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key='+ this.state.api_key +'&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=' + this.state.page)
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        films: this.state.films.concat(data.results),
        page: this.state.page+1,
      })
    })
    .catch(console.log)
  }
}

export default withRouter(Home);