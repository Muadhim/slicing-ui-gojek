import React, { Component } from "react";
import Card from "../../components/card/Card";
import Slideshow from "../../components/slideshow/Slideshow";
import './Beranda.css'

import growthCardImg from "../../img/12x_growth.png"
import twoMillionImg from "../../img/2_million.png"
import millionImg from '../../img/50_million.png';
import milImg from '../../img/170_mil.png'
import img773 from '../../img/image77-3.png'
import img776 from '../../img/image77-6.png'
import img777 from '../../img/image77-7.png'
import img77 from '../../img/image77.png'

import slide1 from '../../img/0fc401cabad9e5eae170a6fbb22b5487.webp'
import slide2 from '../../img/a649269ee5ee58d4b561d162aa7faf55.webp'
import slide3 from '../../img/b1fcb926d9e274c421701447140e8dfc.webp'
import slide4 from '../../img/deba2f4773097477085fd9792cf14438.webp'

class Beranda extends Component {
    constructor(){
        super()
        this.state={
            card: [
                {
                    img: milImg,
                    header: '190 juta+',
                    body: 'jumlah install aplikasi kami.',
                    styleCard : 'style-card card-color1',
                    styleImg : 'style-img',
                    styleHeader : 'style-header',
                    styleBody : 'style-body',
                },
                {
                    img: twoMillionImg,
                    header: '2 juta+',
                    body: 'mitra Driver yang sudah bergabung dengan kami',
                    styleCard : 'style-card card-color2',
                    styleImg : 'style-img',
                    styleHeader : 'style-header',
                    styleBody : 'style-body',
                },
                {
                    img: millionImg,
                    header: '900.000+',
                    body: 'jumlah mitra GoFood',
                    styleCard : 'style-card card-color3',
                    styleImg : 'style-img',
                    styleHeader : 'style-header',
                    styleBody : 'style-body',
                },
                {
                    img: growthCardImg,
                    header: '2.448x',
                    body: 'lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020',
                    styleCard : 'style-card card-color4',
                    styleImg : 'style-img',
                    styleHeader : 'style-header',
                    styleBody : 'style-body',
                },
            ],
            animateCard: [
                {
                    img: img776,
                    header: 'Fortune Top 20',
                    body: 'Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune',
                    styleCard : 'style-card-animated',
                    styleImg : 'style-img-animated',
                    styleHeader : 'style-header-animated',
                    styleBody : 'style-body-animated',
                },
                {
                    img: img77,
                    header: 'Berkontribusi lebih dari $7.1 triliun',
                    body: 'Penggerak roda perekonomian Indonesia',
                    styleCard : 'style-card-animated',
                    styleImg : 'style-img-animated',
                    styleHeader : 'style-header-animated',
                    styleBody : 'style-body-animated',
                },
                {
                    img: img773,
                    header: 'Penggerak roda perekonomian Indonesia',
                    body: 'Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020',
                    styleCard : 'style-card-animated',
                    styleImg : 'style-img-animated',
                    styleHeader : 'style-header-animated',
                    styleBody : 'style-body-animated',
                },
                {
                    img: img777,
                    header: 'Tumbuh 80% sejak pandemi',
                    body: 'Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM.',
                    styleCard : 'style-card-animated',
                    styleImg : 'style-img-animated',
                    styleHeader : 'style-header-animated',
                    styleBody : 'style-body-animated',
                },
            ],
            slideshowList : [
                {
                    img: slide1,
                    textCaption: '',
                },
                {
                    img: slide2,
                    textCaption: '',
                },
                {
                    img: slide3,
                    textCaption: '',
                },
                {
                    img: slide4,
                    textCaption: '',
                },
            ],
        }
    }

    
    render(){
        return(
            <div className="beranda">
                <div className="title-header">
                    <h1>3 negara. <br />
                        20+ layanan. <br />
                        1 platform <br />
                        on-demand terkemuka.
                    </h1>
                </div>
                <div className="content">
                    <h2>Kenalin, Gojek. <br />
                        Si pembawa perubahan
                    </h2>
                    <button className="gabung-button">Gabung</button>
                    <div className="card-info">
                    <div className="center-list-card">
                            <div className="card-list">
                                {
                                    this.state.animateCard.map(dataCard => {
                                        {console.log(dataCard.img)}
                                        return(
                                            
                                            <Card 
                                                img={dataCard.img} 
                                                header={dataCard.header} 
                                                body={dataCard.body}
                                                styleCard={dataCard.styleCard}
                                                styleImg={dataCard.styleImg}
                                                styleHeader={dataCard.styleHeader}
                                                styleBody={dataCard.styleBody}
                                            />
                                            
                                        )
                                        
                                    })
                                }
                            </div>
                        </div>
                        <h3>Skala kami</h3>
                        <button className="gabung-button">Gabung</button>
                        <div className="center-list-card">
                            <div className="card-list">
                                {
                                    this.state.card.map(dataCard => {
                                        return(
                                            
                                            <Card 
                                                img={dataCard.img} 
                                                header={dataCard.header} 
                                                body={dataCard.body}
                                                styleCard={dataCard.styleCard}
                                                styleImg={dataCard.styleImg}
                                                styleHeader={dataCard.styleHeader}
                                                styleBody={dataCard.styleBody}
                                            />
                                            
                                        )
                                        
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <Slideshow 
                        slideshowList={this.state.slideshowList} 
                    />
                </div>
            </div>
        )
    }
}
export default Beranda