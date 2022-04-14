import React, { Component } from "react"
import Kitab from './Kitab'

// import 'rupiah-format'


const convertRupiah = require('rupiah-format');

class MarketPage extends Component {
    state = {
        listKitab: [],

    }

    getData = () => {
        fetch('http://localhost:3005/kitabs')
            .then(response => response.json())
            .then(myJson => {
                this.setState({
                    listKitab: myJson
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
                            this.state.listKitab.map(kitab => {
                                return <Kitab key={kitab.id} id={kitab.id} gambar={kitab.gambar} nama={kitab.namaKitab} harga={convertRupiah.convert(kitab.harga)} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketPage;