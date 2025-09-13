import React from "react";
import NirvanaLogo from "../../assets/Logo.png";

import classes from "./Footer.module.css";

const Nirvanainsta = "https://www.instagram.com/techgeeksgehu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const Nirvanalinkedin = "https://www.linkedin.com/company/techgeeksgehu/posts/?feedView=all";
// const Nirvanaitwitter=''



const shubhamGithub = "https://github.com/Shubham-Loshali";
const nitinGithub = "https://github.com/Shubham-Loshali";


const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_Nirvana_image_div}>
            <div>
              <img
                className={classes.footer_Nirvana_image}
                src={NirvanaLogo}
                alt="NirvanaLogo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_Nirvana}>NIRVANA'25</h1> */}
            </div>
          </div>
          <p className={classes.footer_Nirvana_description}>
            Nirvana'25 is One of the Largest Technical festival of Haldwani. Let&apos;s
            make a Tech move.
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={Nirvanainsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href={Nirvanalinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>{" "}
            </div>
            {/* <div>
              <a
                href={Nirvanatwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>  </div> */}
          </div>
        </div>
        {/* <div className={classes.footer}second'>
          <h2 className={classes.footer}menu-heading'>Menu</h2>
          <h6 className={classes.footer}page-link'>About US</h6>
          <h6 className={classes.footer}page-link'>Term of Use</h6>
          <h6 className={classes.footer}page-link'>Privary Policy</h6>
          <h6 className={classes.footer}page-link'>Order History</h6>
          <h6 className={classes.footer}page-link'>Return policy</h6>
        </div> */}
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>Graphic Era Hill University, Haldwani</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                alt=""
              />
            </div>
            <div>
              <p>9876543213</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <p className={classes.mail}>techgeeks@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
              <div className={classes.footer_creator_div}>
          <h4 className={classes.footer_creator}>
            Website designed and created by{" "}
            <a
              href={shubhamGithub}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.footer_a_link}
            >
              Shubham Loshali
            </a>{" "}
            and{" "}
            <a
              href={nitinGithub}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.footer_a_link}
            >
              {" "}
              Nitin Vishwakarma
            </a>{" "}
          </h4>
        </div>
    </div>
  );
};

export default Footer;
