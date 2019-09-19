import React, {Component} from 'react';
import './styles.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
        page: 54,
        api_key: 'f7935cd563a9169522a96c62d2fd7106',
        films: [],
    }
  }

  render(){
    const films = this.state.films.map((film, i) => {
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
                    className="btn btn-primary">
                    Watch
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div className="App">
         <div className="container">
          <div className="row mt-4">
            <div className="col-md-16">
              <div className="row">
                {films}
              </div>
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
      this.setState({ films: data.results })
      console.log(data.results)
    })
    .catch(console.log)
  }
}

export default Home;