import React from "react";
import "../assets/css/style.css";

const styles = {
    containerStyle: {
        margin: "50px 10px 50px 10px"
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
                            <p>View my resume <a style={styles.resumeStyle} href="images/resume.pdf"
                                className="resume" target="_blank">here.</a></p>
                            <p>
                                Below are some small, sample projects I've worked on during my first few weeks in
                                UTSA's coding bootcamp. Click the thumbnails to view their respective GitHub repositories.
                        </p>
                            <br />
                        </div>


                        <div className="row">
                            <div className="col-lg-6">
                                <a href="https://github.com/celineross/celineross.github.io/tree/master/Homework3JS"
                                    target="_blank" rel="noreferrer">
                                    <img className="sites" src="images/final.png" alt="Password Generator" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://celineross.github.io/Homework3JS/" target="_blank" rel="noreferrer">here</a> to view the app in action.
                            </p>

                                <a href="https://github.com/celineross/Employee-Management-System" target="_blank" rel="noreferrer">
                                    <img className="sites" src="images/emp.png" alt="Employee Management System" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://github.com/celineross/Employee-Management-System/blob/main/gif/working.gif" target="_blank" rel="noreferrer">here</a>
                                to view the app in
                                action.</p>

                                <a href="https://github.com/celineross/Note-Taker" target="_blank" rel="noreferrer">
                                    <img className="sites" src="images/notetaker.png" alt="Note Taker" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://secure-castle-48565.herokuapp.com/" target="_blank" rel="noreferrer">here</a>
                                to view the app in
                                action.</p>

                                <a href="https://github.com/celineross/Template-Engine" target="_blank" rel="noreferrer">
                                    <img className="sites" src="images/templategen.png" alt="Note Taker" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://powerful-mountain-33181.herokuapp.com/" target="_blank" rel="noreferrer">here</a>
                                to view the app in
                                action.</p>

                                <a href="https://github.com/cascutter/Project-1-Night-In" target="_blank" rel="noreferrer">
                                    <img className="sites" src="../asset/images/nightin.png" alt="Night In Project" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://cascutter.github.io/Project-1-Night-In/" target="_blank" rel="noreferrer">here</a> to view the app in
                                action.</p>

                                <a href="https://github.com/cascutter/Project2" target="_blank" rel="noreferrer">
                                    <img className="sites" src="images/project2.jpg" alt="Project 2 AudioFiler" /></a>
                                <p style={styles.pStyle}>Click <a style={styles.resumeStyle}
                                    href="https://blooming-wildwood-71202.herokuapp.com/" target="_blank" rel="noreferrer">here</a> to view the app in
                                action.</p>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Portfolio;