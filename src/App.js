import React, {useState, useEffect} from 'react';
import Fruta from './components/Fruta'
import CheckIn from './components/CheckIn';
import Form from './components/Form/Form';
import ListaFrutas from './components/Fruta/ListaFrutas';

class App extends React.Component {

    state = {
        total: 0,
    }
    

    total = (parametro) => {
        
        this.setState({total: parametro.total})
        
    }

    render(){
        return (
        <>
            <ListaFrutas bus = {this.total}/>
            <CheckIn total={this.state.total} />
        </>
    )
    }
    
}

export default App;