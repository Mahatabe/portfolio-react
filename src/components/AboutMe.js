import React from "react";
import Author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Author} alt="Author..."></img>
                    </div>
                </div>
                <div  className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        I am an engineering graduate spcialized in computer science and engineering and am motivated and passionate about generating quality software products and improving client experience.
                        Able to work well with others and have the drive to push through difficult situations in order to achieve the desired outcome.
                        Eager to learn and implement enhanced software and technology solutions.

                        I am proficient in C++, Java, C#, Python, PHP, SQL.
                        In software development, I am proficient in ASP.NET (.NET 6), JavaScript, HTML, and CSS. Proficient in frontend library React, jQuery and Node. Proficient in framework Angular and Bootstrap.
                        Worked with database such as Oracle, SQL Server, MongoDB, and Xampp.

                        I create responsive websites that are displayed on all devices desktops and smartphones.

                        Of course, before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout (sketch).

                        And I am ready to do this for you, before we start developing your website, we will discuss all the  details of your niche with you, I will conduct a survey of your competitors and make a list of their advantages and weaknesses.

                        All this is necessary to give your customers something that your competitors do not provide, or to present it too, but better!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
