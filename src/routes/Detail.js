import React from "react";
import Movie from "../components/Movie";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const movie = location.state;
      return (
        <div className="movies">
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.poster}
            genres={movie.genres}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
