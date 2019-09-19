import React, {Component} from 'react';

class Films extends Component {
  constructor() {
    super();
    this.state = {
        page: 1,
        api_key: 'f7935cd563a9169522a96c62d2fd7106',
        films: [],
    }
  }

  render(){

    return(
        <h1>T</h1>
    );
  }

  componentDidMount(){

  }

  fetchFilms(){
  }
}

export default Films;