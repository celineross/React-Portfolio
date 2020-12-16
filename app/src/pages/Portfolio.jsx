import React from "react";
import "../assets/css/style.css";
import nightin from "../assets/images/nightin.png";
import audiofiler from "../assets/images/audiofiler.jpg";
import artisthub from "../assets/images/artisthub.png";
import emp from "../assets/images/emp.png";
import resume from "../assets/images/resume.pdf";
import budget from "../assets/images/budget.png"


const styles = {
    containerStyle: {
        margin: "0 auto",
        marginTop: "30px",
        marginBottom: "30px",
        maxWidth: "80%"
    },
    resumeStyle: {
        color: "rgb(40,46,46)"
    },
    pStyle: {
        textAlign: "center"
    }
}

function Portfolio() {
    return (
        <div className="portfolio">

            <div className="my-container" style={styles.containerStyle}>

                <div className="row">
                    <div className="col-lg-12">

                        <div className="page-header">
                            <h1>Portfolio</h1>
                            <hr />
                            <p>View my resume <a style={styles.resumeStyle} href={resume}
                                className="resume" target="_blank" rel="noreferrer">here</a>.</p>
                            <p>
                                Below are some projects I've created or contributed to. Take a look to evaluate my extensive practical abilities!
                        </p>
                            <br />
                        </div>


                        <div className="row">
                            <div className="col-lg-4">
                                <p style={{ fontSize: "30px", textAlign: "center" }}>
                                    Budget App
                                    <hr />
                                </p>
                                <p>
                                    A database-centered application that allows a user store and keep track of transactions online or offline utilizing the browser database and MongoDB.
                                </p>
                                <a href="https://github.com/celineross/My-Budget"
                                    target="_blank" rel="noreferrer">
                                    <img className="sites" src={budget} alt="Budget Tracker" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://offline-budget-tracking.herokuapp.com/" target="_blank" rel="noreferrer"> here</a> to view the app in action.
                                </p>

                                <br />

                                <p style={{ fontSize: "30px", textAlign: "center" }}>
                                    Employee Management App
                                    <hr />
                                </p>
                                <p>
                                    A CLI application that can display and edit the contents of a company. Features attributes such as employee departments, roles, names, and their respective manager.
                                </p>
                                <a href="https://github.com/celineross/Employee-Management-System" target="_blank" rel="noreferrer">
                                    <img className="sites" src={emp} alt="Employee Management System" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://github.com/celineross/Employee-Management-System/blob/main/gif/working.gif" target="_blank" rel="noreferrer"> here</a> to view the app in action.
                                </p>
                            </div>


                            <div className="col-lg-4">
                                <p style={{ fontSize: "30px", textAlign: "center" }}>
                                    Employee Directory
                                    <hr />
                                </p>
                                <p>
                                    This app allows a user to keep track of their entire employee directory and features search options by name, department, and role.
                                </p>
                                <a href="https://github.com/celineross/React-Employee-Directory" target="_blank" rel="noreferrer">
                                    <img className="sites" src="https://i.gyazo.com/25b586701cdac8a186004a30de1f9d39.jpg" alt="React Directory" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://celineross.github.io/React-Employee-Directory/" target="_blank" rel="noreferrer"> here</a> to view the app in action.
                                </p>

                                <br />

                                <p style={{ fontSize: "30px", textAlign: "center" }}>
                                    Night In
                                    <hr />
                                </p>
                                <p>
                                    Night In is a mobile-first app that uses multiple APIs to retrieve movie selections, recipes, and cocktails based on user input. This application uses a combination of HTML, CSS using the Bulma framework, JavaScript, jQuery, third-party APIs, and ajax.
                                </p>
                                <a href="https://github.com/celineross/Night-In" target="_blank" rel="noreferrer">
                                    <img className="sites" src={nightin} alt="Night In"></img></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://cascutter.github.io/Project-1-Night-In/" target="_blank" rel="noreferrer"> here</a> to view the app in
                                action.
                                </p>
                            </div>

                            <div className="col-lg-4">
                                <p style={{ fontSize: "30px", textAlign: "center" }}>
                                    ArtistHub
                                    <hr />
                                </p>
                                <p>
                                    A forthcoming project that will allow content creators such as music artists and streamers to interact with fans, create a storefront, post events, and display their general information.
                                </p>
                                <a href="https://github.com/malex19889/ArtistHub" target="_blank" rel="noreferrer">
                                    <img className="sites" src={artisthub} alt="ArtistHub" /></a>
                                <p style={styles.pStyle}>In Progress!</p>

                                <br />

                                <p style={{ fontSize: "30px", textAlign: "center" }}>
                                    AudioFiler
                                    <hr />
                                </p>
                                <p>
                                    A full stack application that allows a user to create an account, and keep track of their record collection. Add condition, media type, and additional notes to each album in your collection to create the perfect, detailed virtual music archive.
                                </p>
                                <a href="https://github.com/celineross/Project2" target="_blank" rel="noreferrer">
                                    <img className="sites" src={audiofiler} alt="AudioFiler" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://blooming-wildwood-71202.herokuapp.com/" target="_blank" rel="noreferrer"> here</a> to view the app in
                                action.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Portfolio;