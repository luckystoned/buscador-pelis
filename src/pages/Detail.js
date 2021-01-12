import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = 'e0f59ddc'

export class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
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

    _goBack() {
        window.history.back()
    }

    componentDidMount() {
        const { id } = this.props
        this._fetchMovie({ id })
    }

    render() {
        const { Title, Type, Released, Actors, Director, Genre, Plot, Poster, Writer, imdbRating } = this.state.movie
        return (
            <div>
                <button onClick={this._goBack}>Home</button>
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

            </div>
        );
    }
}
