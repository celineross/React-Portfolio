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
                        Hello, my name is Celine Ross, I currently live in Austin, Texas. I'm 23 years old with a Bachelor's degree in Psychology with
                        a minor
                        in Wellness. I'm an only child, and I have one black cat named Merlin. I decided to enter
                        the field
                        of web development because my college degree, unsurprisingly, was pretty useless without
                        further
                        training. I started graduate school to become a Licensed Professional Counselor, but decided
                        after
                        about two months it wasn't the field for me and dropped out. I was working at Staples at the
                        time
                        in the print center, and decided to stay there full-time to pay my bills. After a while I
                        became aware
                        of the bootcamp programs at UTSA, my alma matre. I chose the web development program and I'm
                        now
                        enjoying it thoroughly. I look forward to the skills I'm going to develop, and being able to
                        market
                        my skills to future employers with the help of career services.
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