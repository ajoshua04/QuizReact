import React from "react";

class CheckIn extends React.Component {


    render() {
        return (
            <>
                <p>Total a pagar: {this.props.total}</p>
                <button>Pagar</button>
            </>
        )
    }
}

export default CheckIn