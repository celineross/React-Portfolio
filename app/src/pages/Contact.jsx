import React from "react";
import "../assets/css/style.css";

const styles = {
    containerStyle: {
        margin: "0 auto",
        marginTop: "30px",
        marginBottom: "30px",
        maxWidth: "80%"
    },
    linkColor: {
        color: "rgb(40, 46, 46)"
    }
}

function Contact() {
    return (
        <div className="my-container" style={styles.containerStyle}>

            <div className="row">
                <div className="col-lg-12">
                    <h1>Contact Me</h1>
                    <hr />
                    <p>
                        Feel free to message me anytime! I check my email and LinkedIn daily, and I'll do
                        my best to respond as quickly as possible.
                    </p>
                    <p>
                        You can contact me at 512-968-8048, please leave a voicemail and I'll get back to you the same day.
                    </p>
                    <p>
                        If email is preferred, my address is <a href="mailto:celineross@gmail.com" style={styles.linkColor} target="_blank" rel="noreferrer">celineross@gmail.com</a>.
                    </p>
                    <p>
                        Additionally, I can be found on <a href="https://www.linkedin.com/in/celine-ross-823b34180/" style={styles.linkColor} target="_blank" rel="noreferrer">LinkedIn</a> and <a href="https://github.com/celineross" style={styles.linkColor} target="_blank" rel="noreferrer">GitHub</a>.
                    </p>
                    <p style={{fontSize:"2rem", textAlign:"center", marginBottom:"5px", paddingTop:"10px"}}>
                        Thanks for stopping by!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;