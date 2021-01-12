import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Movie extends Component {
    static propTypes = {
        title: PropTypes.string,
        type: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }


    render() {
        const { poster, title, year, type} = this.props
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <img 
                            src={poster} 
                            alt={title} 
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">This is a {type}</p>
                            <p className="subtitle is-6 "><b>{year}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
