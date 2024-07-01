'use client'

import Link from "next/link";
import {useEffect, useState} from "react";
import HeaderNavContent from "../header/HeaderNavContent";
import Image from "next/image";

const Header = () => {
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Check if running in the browser
        if (typeof window !== 'undefined') {
            const data = JSON.parse(localStorage.getItem('data'));
            setIsDataAvailable(data !== null);
            setUserName(data.prenom + ' '+ data.nom);
        }
        console.log(isDataAvailable)
    }, []);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);



    return (
        // <!-- Main Header-->
        <header
            className={`main-header header-style-two alternate  ${
                navbar ? "fixed-header animated slideInDown" : ""
            }`}
        >
            <div className="auto-container">
                {/* <!-- Main box --> */}
                <div className="main-box">
                    {/* <!--Nav Outer --> */}
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        // Default 154, 50
                                        width={50}
                                        height={50}
                                        src="/images/logo-2.svg"
                                        alt="brand"
                                    />
                                </Link>
                            </div>
                        </div>
                        {/* End .logo-box */}

                        <HeaderNavContent/>
                        {/* <!-- Main Menu End--> */}
                    </div>
                    {/* End .nav-outer */}

                    {!isDataAvailable && (
                        <div className="outer-box">
                            <div className="d-flex align-items-center btn-box2">
                                <a
                                    href="#"
                                    className="theme-btn btn-style-six call-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginPopupModal"
                                >
                                    S'identifier
                                </a>
                            </div>
                        </div>
                    )}
                    {isDataAvailable && (
                        <div className="outer-box">
                            <div className="d-flex align-items-center btn-box2">
                                <a
                                    className="theme-btn btn-style-six call-modal"
                                >
                                    Bienvenue {userName}
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
