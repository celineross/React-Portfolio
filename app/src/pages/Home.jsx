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
        width: "25%",
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
                    <p>
                        Hello, my name is Celine Ross, I currently live in Austin, Texas. I'm a 23 year old full stack web developer currently looking for a junior developer position! I graduated from the University of Texas at San Antonio in 2019 with a Bachelor’s in Psychology with a focus in Emotional and Physical Wellness. After graduating and taking a couple Computer Science courses as electives, I decided that web development would be a really exciting new direction in my education. As a person who enjoys a challenge, I chose a 6 month bootcamp also hosted at UTSA. As my graduation date approaches, I’m very excited to break into the industry of web development and continue to hone my coding skills and challenge myself every day.
                    </p>
                    <p>
                        Some of my hobbies include reading, writing, and now... coding! I've actually been playing
                        with the
                        idea of writing and publishing a book to Amazon to make some extra money and fulfill a
                        lifelong dream
                        of writing my own novel. I've been bouncing around ideas of possibly a young-adult novel, a
                        fantasy
                        series, or even a nonfiction book about the history of rock 'n roll. In addition to writing,
                        I play
                        drums recreationally. I aspire to join a band and perform once my skills are adequate enough
                        to draw
                        an audience. I'd wanted to play drums since I was really little, so as soon as I was able to
                        afford
                        a drum kit and some lessons, I dove right in. I bought my first real drum kit (I had to use
                        an electronic
                        kit when I lived in an apartment complex for noise reasons) about a year ago, and it is by
                        far my most
                        prized possession. I hope you enjoyed learning a little bit about me!
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Home;