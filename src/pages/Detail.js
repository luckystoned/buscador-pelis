import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonBackToHome from '../components/ButtonBackToHome'

const API_KEY = 'e0f59ddc'

export class Detail extends Component {
    static propTypes = {
        // Basic Router + disengage Home
        //id: PropTypes.string
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    
    state = { movie: {} }

    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}
        `)
        .then(res => res.json())
        .then(movie => {
            console.log(movie)
            this.setState({ movie })
        })
    }

    componentDidMount() {
        // Basic Router + disengage Home
        //const { id } = this.props
        //this._fetchMovie({ id })
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
    }

    render() {
        const { Title, Type, Released, Actors, Director, Genre, Plot, Poster, Writer, imdbRating } = this.state.movie
        return (
            <div className="has-text-centered">
                <h1>{Title}</h1>
                <h2>{Director}</h2>
                <img src={Poster} alt={Title} />
                <h3>Type: {Type}</h3>
                <p>Genre: {Genre}</p>
                <p>Released: {Released}</p>
                <p>Actors: {Actors}</p>
                <p>Writer: {Writer}</p>
                <small>{Plot}</small>
                <p>Rating Imbd: {imdbRating}</p>
                <ButtonBackToHome />
            </div>
        );
    }
}
