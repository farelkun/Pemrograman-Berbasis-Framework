import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom';
import ProductDetail from "./ProductDetail";


const products = (props) => {
    return (
        <div className="col-md-2">
            <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }} replace>
                <div className="card border-0 shadow h-100">
                    <img src={window.location.origin + props.gambar} className="card-img-top img-fluid" alt="" />
                    <div className="card-body">
                        <div className="row">
                            <h5 >{props.nama}</h5>
                            <b>{props.harga}</b>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default products;
