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
import DetailKitab from "./KitabDetail";


const Kitabs = (props) => {
    return (
        // <Router>
        <div className="col-md-2">
            <Link to={`/kitab/${props.id}`} style={{ textDecoration: 'none' }} replace>
                <div className="card border-0 shadow my-3">
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

        // </Router>
    )
}

// const Kitab = () => {
//     return (
//         <>
//             {
//                 kitabs
//             }
//         </>
//     )
// }

export default Kitabs;

// function DetailKitab() {
//     return (
//         <div>Detail Kitab</div>
//     )
// }