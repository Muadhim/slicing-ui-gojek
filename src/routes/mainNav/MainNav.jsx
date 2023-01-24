import React from "react";
import { Link } from "react-router-dom";
import './MainNav.css'

import gojekLogo from "../../img/gojeks_logo/Gojek_Logo/PNG_White/Gojek_Logo_Horizondal.png"

const MainNav = () => {
    return(
        <div className="main-nav">
            <div className="home-logo">
                <Link to={"/"}><img src={gojekLogo} alt="" /></Link>
            </div>
            <div className="home-nav">
                <div className="link"><Link to={'/'}>Beranda <div className="garis"></div></Link></div>
                <div className="link dropdown">
                    <span className="link">Gabung jadi Mitra <div className="garis"></div></span>
                    <div className="dropdown-content">
                        <div className="show-dropdown-content">
                            <Link to={'/mitra-driver'}>Mitra Driver</Link>
                            <br />
                            <Link to={'/mitra-usaha'}>Mitra Usaha</Link>
                        </div>
                    </div>
                </div>
                <div className="link"><Link to={'/karir'}>Karir <div className="garis"></div></Link></div>
                <div className="link dropdown">
                    <span className="link">Perusahaan <div className="garis"></div></span>
                    <div className="dropdown-content">
                        <div className="show-dropdown-content">
                            <Link to={'/tentang'}>Tentang</Link>
                            <br />
                            <Link to={'/newsroom'}>Newsroom</Link>
                            <br />
                            <Link to={'/aman'}>Aman</Link>
                            <br />
                            <Link to={'/sustainability'}>Sustainability</Link>
                        </div>
                    </div>
                </div>
                <div className="link"><Link to={'/produk'}>Produk <div className="garis"></div></Link></div>
                <div className="link"><Link to={'/blog'}>Blog <div className="garis"></div></Link></div>
                <div className="link"><Link to={'/bantuan'}>Bantuan <div className="garis"></div></Link></div>
            </div>
            <div className="language-support">
                ID
            </div>
        </div>
    )
}

export default MainNav