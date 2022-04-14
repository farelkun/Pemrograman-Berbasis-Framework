import React, { Component } from "react"
import Product from './Product'


const convertRupiah = require('rupiah-format');

class MarketPage extends Component {
    state = {
        listProduct: [],

    }

    getData = () => {
        fetch('http://localhost:3005/products')
            .then(response => response.json())
            .then(myJson => {
                this.setState({
                    listProduct: myJson
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
                    <div className="row">
                        {
                            // console.log(this.state)
                            this.state.listProduct.map(product => {
                                return <Product key={product.id} id={product.id} gambar={product.gambar} nama={product.nama} stok={product.stok} harga={convertRupiah.convert(product.harga)} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketPage;