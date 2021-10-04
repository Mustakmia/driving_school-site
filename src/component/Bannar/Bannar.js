import React from 'react';
import "./Bannar.css";
const Bannar = () => {
    return (
        <div className="banner-container mt-5 ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h1 className="title">
                            akhane likhbo
                            <br />
                        </h1>
                        <p className="text-white text-center mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit

                        </p>
                        <button className="mt-3 about-btn">About Us</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;