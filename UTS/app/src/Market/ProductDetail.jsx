import { Link, Redirect, Route, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MarketPage from "./MarketPage";
import axios from "axios";
const convertRupiah = require('rupiah-format');
function ProductDetail() {

    const { productId } = useParams()


    const [data, setData] = useState({ products: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3005/products/' + productId,
            );

            setData(result.data);
        };

        fetchData();
    }, []);

    return (
        <>
            {
                <div className="row">
                    <div className="col-md-4">
                        <img src={data.gambar} style={{ height: 300 }} />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <h3>{data.nama}</h3>
                            <p>{data.deskripsi}</p>
                            <b>{convertRupiah.convert(data.harga)}</b>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                            <h4>DETAILS</h4>
                            <ul style={{ listStyle: 'none' }}>
                                <li><b>Stok : </b>{data.stok}</li>
                            </ul>
                        </div>


                        <div className="text-left">
                            <Link to={`/checkout/${data.id}`} >
                                <button className="btn btn-success">
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    );

}

export default ProductDetail;