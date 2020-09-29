import React from 'react';
import { Superhero } from './Superhero'
import { API_ROOT } from '../services/apiRoot'

export class SuperheroList extends React.Component {

    state = {
        superheroes: []
    }

    mapSuperheroes = (superheroes) => {
        return superheroes.map(superhero => <Superhero key={superhero.name} name={superhero.name} powers={superhero.superpowers_list} />)
    }

    fetchSuperheroes = () => {
        fetch(`${API_ROOT}/superheroes`)
            .then(response => response.json())
            .then(superheroes => this.setState({ ...this.state, superheroes: superheroes }))
    }

    componentDidMount() {
        this.fetchSuperheroes()
    }

    render() {
        return (
            <>
                <h1>Superheroes</h1>
                <br />
                {this.mapSuperheroes(this.state.superheroes)}
            </>
        )
    }
}