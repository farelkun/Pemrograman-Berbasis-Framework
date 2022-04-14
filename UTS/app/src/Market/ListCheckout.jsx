import React from "react";


const ListCheckout = (props) => {
    return (
        <tr>
            <td> {props.nama}</td>
            <td> <img src={props.gambar} style={{ maxHeight: 80 }} alt="" /> </td>
            <td> {props.jumlah}</td>
            <td> {props.harga}</td>
        </tr>
    )
}


export default ListCheckout