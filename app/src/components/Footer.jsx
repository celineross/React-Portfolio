import React from "react";
import "../assets/css/style.css";

const styles = {
    footerColor: {
        color: "rgb(40, 46, 46)"
    }
}

function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <div className="container">
                <span className="text">Find me on <a style={styles.footerColor}
                    href="https://www.linkedin.com/in/celine-ross-823b34180/" target="_blank" rel="noreferrer">LinkedIn</a> and <a
                        style={styles.footerColor} href="https://github.com/celineross" target="_blank" rel="noreferrer">
                        GitHub.</a></span>
            </div>
        </footer>
    );
}

export default Footer;