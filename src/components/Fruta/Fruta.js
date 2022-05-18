import React from 'react'

class Fruta extends React.Component {

    state = {
        cantidad: 0,
        total: 0
    }

    agregar = () => {

        const nueva_cantidad = this.state.cantidad + 1

        const nueva_total = nueva_cantidad * this.props.price

        console.log('la nueva cantidad de esta fruta es : ',nueva_cantidad)

        this.setState({
            cantidad: nueva_cantidad,
            total: nueva_total
        })

        this.props.bus({
            id:this.props.name,
            cantidad: nueva_cantidad,
        })

    
    }

    quitar = () => {
        const nueva_cantidad = this.state.cantidad - 1

        const nueva_total = nueva_cantidad * this.props.price

        console.log('la nueva cantidad de esta fruta es : ',nueva_cantidad)

        this.setState({
            cantidad: nueva_cantidad,
            total: nueva_total
        })

        this.props.bus({
            id:this.props.name,
            cantidad: nueva_cantidad,
        })

    
    }

    limpiar = () => {
        const nueva_cantidad = 0

        const nueva_total = nueva_cantidad * this.props.price

        console.log('la nueva cantidad de esta fruta es : ',nueva_cantidad)

        this.setState({
            cantidad: nueva_cantidad,
            total: nueva_total
        })

        this.props.bus({
            id:this.props.name,
            cantidad: nueva_cantidad,
        })

        
    }

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>Precio: {this.props.price}</p>
                <p>Cantidad: {this.state.cantidad} </p>
                <p><strong>Total:</strong> {this.state.total}</p>

                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>Limpiar</button>
                <hr/>
            </div>
        )

    }
}

export default Fruta