import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobileAndroid } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                                <h3>Web Application</h3>
                                <p>
                                    I will provide you with dedicated server space for your web application as part of your service.
                                    I will also responsible for server management, backup services, software maintenance, security, and technical support.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faMobileAndroid} size="2x" /></div>
                                <h3>Mobile Application</h3>
                                <p>
                                    I will provide end-to-end organization, design, optimization, and maintenance of your mobile application.
                                    I will take a simple idea and turn it into a functional product that could be your next big moneymaker.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
