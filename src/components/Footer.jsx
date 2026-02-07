import React from "react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="border-t mt-auto border-white/30 min-h-32 w-full bg-indigo-950 text-white px-8">
            <div className="px-4 py-6 border-b border-white/30">
                <h1 className="text-2xl font-black">Vicky Raj | Portfolio</h1>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <h4 className="font-semibold  text-xl mb-4">Contact</h4>
                    <ul>
                        <li>Vicky Raj</li>
                        <li>Patna, Bihar</li>
                        <li>Pincode : 801303</li>
                        <li className="break-all">
                            Email: vickyraj707025@gmail.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-xl mb-4">Expertise</h4>
                    <ul>
                        <li>Frontend Developer</li>
                        <li>Backend Developer</li>
                        <li>MERN Stack</li>
                        <li>Java & C++</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-xl mb-4">Pages</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/Projects">Projects</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-xl mb-4">Links</h4>
                    <ul>
                        <li>
                            <Link to="https://www.linkedin.com/in/vickyraj15/">
                                LinkedIn
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/vickyraj15">
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/vickyraj9700/">
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.facebook.com/xtylist.vicky.badashah/">
                                Facebook
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="px-4 py-6">
                All rights reserved 2025 &copy; Vicky Raj | Portfolio
            </p>
        </div>
    );
};

export default Footer;
