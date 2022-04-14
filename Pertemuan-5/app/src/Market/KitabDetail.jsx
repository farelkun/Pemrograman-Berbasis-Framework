import { Link, Redirect, Route, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MarketPage from "./MarketPage";
import axios from "axios";
const convertRupiah = require('rupiah-format');
function DetailKitab() {

    const { kitabId } = useParams()


    const [data, setData] = useState({ kitabs: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3005/kitabs/' + kitabId,
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
                        <img src={data.gambar} style={{ height: 400 }} />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <h3>{data.namaKitab}</h3>
                            <p>{data.deskripsi}</p>
                            <b>{convertRupiah.convert(data.harga)}</b>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                            <h4>DETAILS</h4>
                            <ul>
                                <li><b>Cetakan : </b>{data.cetakan}</li>
                                <li><b>Terbitan : </b> {data.terbitan}</li>
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






export default DetailKitab;