import React, {Component} from 'react';
import './styles.css';

//Router
import {withRouter} from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { compose } from 'redux';

//Redux Actions
import saveFilms from '../../redux/actions/saveFilms';
import savePage from '../../redux/actions/savePage';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
        api_key: 'f7935cd563a9169522a96c62d2fd7106', //La Api Key deberia estar en backend.
        fetching: false,
    }
    this.fetchFilms = this.fetchFilms.bind(this);
  }

  render(){
    const { history, films }  = this.props;

    const display_films = films.map((film, i) => {
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
      <div className="container" data-test="div-test">
        <div className = "center">

          <div className="row mt-4">
            <div className="col-md-16">
              <div className="row">
                {display_films}
              </div>
            </div>
          </div>

          <div className="p-5 text-center">
            <button
              className="btn btn-success"
              onClick={this.fetchFilms}>
                {this.state.fetching ? 'Loading...' : 'Load More'}
            </button>
          </div>


        </div>

      </div>
    );
  }

  componentDidMount(){
    if(this.props.films.length === 0){ //Si redux esta vacio llama al fetch film para inicializarlo
      this.fetchFilms();
    }
  }


  //Fetch
  fetchFilms(){
    console.log('API CALL');
    this.setState({
      fetching: true,
    });
    let page = this.props.page+1;
    fetch('https://api.themoviedb.org/3/discover/movie?api_key='+ this.state.api_key +'&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=' + page)
    .then(res => res.json())
    .then((data) => {
      if(data.hasOwnProperty('results')){
        this.props.saveFilms(data.results);//LLamadas a las actions de redux
        this.props.savePage(data.page);
      }
      this.setState({
        fetching: false,
      });
        
      console.log('redux-films', this.props.films);
      console.log('redux-page', this.props.page);
    })
    .catch(console.log)
  }
}


//Redux
const mapStateToProps = (state) => {
  return {
    films: state.films,
    page: state.page,
  };
};

const mapDispatchToProps = {
  saveFilms,
  savePage,
}


export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Home);