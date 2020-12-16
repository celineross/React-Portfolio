import React from "react";
import "../assets/css/style.css";
import img from "../assets/images/myself_resized.jpg"

const styles = {
    divStyle: {
        margin: "0 auto",
        marginTop: "30px",
        marginBottom: "30px",
        maxWidth: "80%"
    },
    imgStyle: {
        margin: "0 auto",
        marginRight: "15px",
        padding: "5px",
        maxWidth: "30%",
        float: "left"
    }
}

function Home() {
    return (
        <div className="my-container" style={styles.divStyle}>
            <div className="row">
                <section className="col-lg-12 clearfix">
                    <h1>About Me</h1>
                    <hr></hr>
                    <img className="img img-me" alt="me" src={img} style={styles.imgStyle} />
                    <p style={{fontSize:"30px"}}>
                        Welcome to My Homepage!
                    </p>
                    <p>
                        My name is Celine Ross, and I'm a Full Stack Web Developer living in Austin, TX.
                    </p>
                    <p>
                        I have a newfound and intense passion for coding, specifically frontend web development.
                        I'm especially proficient in React, and in several CSS frameworks including Bootstrap and 
                        React-Bootstrap, Bulma, Semantic UI, and Foundation.
                    </p>
                    <p>
                        In addition, I have extensive experience and practice with backend tools and languages such as JavaScript and jQuery, 
                        databases like MySQL and MongoDB, ORMs like Mongoose and Sequelize, CLI applications, GitHub and GitLab, and 
                        countless other technologies.
                    </p>
                    <p>
                        On top of my practical experience, I have a relatively easy time learning new concepts and catching on 
                        quickly to new frameworks and languages. I am highly motivated to take on new challenges, and enjoy 
                        testing my limits under pressure! I'm looking forward to a new adventure once graduating from UTSA's
                        Web Development Bootcamp in January 2021.
                    </p>
                    <p>
                        In my free time, I love reading, sketching, and writing short stories. I also play drums, and aspire to 
                        one day improve enough to join a band and play live music at small bars and restaurants! I also aspire to write a novel, 
                        but more often than not I find between my career goals and side aspirations, there are hardly enough hours 
                        in a day!
                    </p>
                    <p style={{fontSize:"30px"}}>
                        Take a look at my portfolio above for more!
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Home;