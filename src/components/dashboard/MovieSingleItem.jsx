import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { getMovieById } from "../../redux/actions/dataActions";

class MovieSingleItem extends Component {
  componentWillMount = () => {
    //Destructuring;
    const {
      getMovieById,
      match: {
        params: { id }
      }
    } = this.props;
    getMovieById(id);
  };

  render() {
    console.log(this.props.movie);

    return <div>Movie single item</div>;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.data.movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieById: movieId => dispatch(getMovieById(movieId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSingleItem);
