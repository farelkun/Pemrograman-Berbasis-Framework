import React, { Component } from "react";
import Image from './Image';

class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        Satu
                        <Image linkGambar='https://asset.kompas.com/crops/_YD21zDcxeaR0JJSLTw4SpoorC4=/54x87:954x687/750x500/data/photo/2020/09/15/5f60c5c14dd30.jpg' />
                    </li>
                    <li>
                        Dua
                        <Image linkGambar='https://awsimages.detik.net.id/community/media/visual/2021/06/14/nasi-padang-rp-20-ribu-1.png?w=700&q=90' />
                    </li>
                    <li>
                        Tiga
                        <Image linkGambar='https://asset.kompas.com/crops/89gV9XIgLw8Tzv2im_h4C9aEjd8=/0x0:993x662/750x500/data/photo/2021/03/27/605ed24c33816.jpg' />
                    </li>
                    <li>
                        Empat
                        <Image linkGambar='https://img-global.cpcdn.com/recipes/076c50627d597cdd/680x482cq70/soto-lamongan-foto-resep-utama.jpg' />
                    </li>

                </ol>
            </div>
        )
    }
}

export default List;