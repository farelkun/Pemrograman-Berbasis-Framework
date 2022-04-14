import React, { Component } from "react"
import product from './Product'
import ListCheckout from "./ListCheckout";

// import 'rupiah-format'


const convertRupiah = require('rupiah-format');


class CheckoutPage extends Component {
    state = {
        listCo: [],
        totalHarga: 0
    }

    getData = () => {
        fetch('http://localhost:3005/checkout')
            .then(response => response.json())
            .then(myJson => {
                // this.setState({
                //     listCo: myJson
                // })
                myJson.forEach(scndJson => {
                    fetch('http://localhost:3005/products/' + scndJson.id)
                        .then(response => response.json())
                        .then(data => {
                            this.setState({
                                totalHarga: this.state.totalHarga + data.totalHarga,
                                listCo: [...this.state.listCo, (
                                    {
                                        'id': scndJson.id,
                                        'userId': scndJson.userId,
                                        'jumlah': scndJson.jumlah,
                                        'harga': data.harga,
                                        'nama': data.nama,
                                        'gambar': data.gambar
                                    }
                                )]
                            })
                        })
                });
            })
    }


    componentDidMount() {
        this.getData()
    }

    render() {

        var harga = 0;

        return (

            <div className="container-fluid" >
                <div className="container">
                    <h1>LIST CHECKOUT</h1>
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nama product</th>
                                    <th>gambar</th>
                                    <th>Jumlah</th>
                                    <th>harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // console.log(this.state.listCo)
                                    this.state.listCo.map(product => {

                                        var total = product.harga * product.jumlah;
                                        // totalseluruh.push(total);
                                        harga += total;
                                        localStorage.setItem('total', harga)
                                        return <ListCheckout key={product.id} gambar={product.gambar} harga={product.harga * product.jumlah} nama={product.nama} id={product.id} jumlah={product.jumlah} />
                                    })
                                }
                                <tr>
                                    <td colSpan={3}>Total</td>
                                    <td>{
                                        localStorage.getItem('total')
                                    }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutPage;