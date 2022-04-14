import React, { Component } from "react"
import Kitab from './Kitab'
import ListCheckout from "./ListCheckout";

// import 'rupiah-format'


const convertRupiah = require('rupiah-format');

class CheckoutPage extends Component {
    state = {
        listCo: [],

    }

    getData = () => {
        fetch('http://localhost:3005/checkout')
            .then(response => response.json())
            .then(myJson => {
                this.setState({
                    listCo: myJson
                })
            })
    }



    componentDidMount() {
        this.getData()
    }

    render() {

        return (

            <div className="container-fluid" >
                <div className="container">
                    <h1>LIST CHECKOUT</h1>
                    <div className="row">
                        {
                            // console.log(this.state)
                            this.state.listCo.map(kitab => {
                                return <ListCheckout key={kitab.id} id={kitab.id} jumlah={kitab.jumlah} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutPage;