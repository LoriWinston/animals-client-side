import React, { Component } from 'react'
import { getAnimals } from './api-utils.js';
import { Link } from 'react-router-dom';
import Spinner from './Spinner.js';
export default class ListPage extends Component {
    state = {
        animals: [],
        loading: false
    }

    componentDidMount = async () => {
        this.setState({ 
            loading: true,
         });

        const animals = await getAnimals();

        this.setState({ 
            animals: animals,
            loading: false
        })
    }

    render() {
      
        return (
            <div className="list">
                { this.state.loading && <Spinner />}
            
                { this.state.animals.map(animal => <Link
                to={`/animals/${animal.id}`} key={animal.name}>
                    <div className="animal">
                    <p>{animal.species}</p>
                    <p>{animal.temperament}</p>
                    <p>{animal.has_fur 
                        ? 'it has fur' 
                        : 'fur-free'}</p>
                </div>
                </Link>
                    )}
            </div>
        )
    }
}