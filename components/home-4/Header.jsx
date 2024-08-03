'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";
import Image from "next/image";

const Header = () => {
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
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
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
                                        width={100}
                                        height={100}
                                        src="/images/white.png"
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

                    <div className="outer-box">
                        <div className="d-flex align-items-center btn-box2">
                            <a className="theme-btn btn-style-six call-modal">
                                Mon espace
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
