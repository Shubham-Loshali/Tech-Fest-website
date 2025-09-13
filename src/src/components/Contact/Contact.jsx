import Faq from "../Faq/Faq";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>
          <Faq />
          {/* <div className={classes.persons}>
            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Shamsudheen</h3>
              <div className={classes.details}>
                <p>
                  Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+917012824370">
                  +91 7012 824 370
                </a>
              </div>
            </div>
            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Sithara Beegam</h3>
              <div className={classes.details}>
                <p>
                  Vice Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+918592002134">
                  +91 8592 002 134
                </a>
              </div>
            </div>
          </div> */}

          <div className={classes.mapBox}>
            <iframe
              className={classes.map}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Graphic+Era+Hill+University+Haldwani"
              // width="600"
              // height="450"
              // style="border:0;"
              // allowfullscreen=""
              title="gehumap"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
