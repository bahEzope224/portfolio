import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
  
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez <span className="purple">MOI</span> me présenter
            </h1>
            <p className="home-about-body">
              Je suis passionné de la programmation et des nouvelles technologies. J'ai pas mal appris et je suis toujours en recherche de nouvelles <strong className="purple">OPPORTUNITES</strong> pour apprendre de nouvelles competence et <strong className="purple">ENRICHIR</strong> mes connaisances;  
              <br />
              <br />Je suis très à l'aise avec les langages de programmation classique comme
              <i>
                <b className="purple"> HTML/CSS, Javascript, PHP, SQL et python. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont la création   &nbsp;
              <i>
                <b className="purple">de nouvelles technologies, de produits web </b>
                ainsi que dans des domaines liés à {" "}
                <b className="purple">
                la DATA, l'IA, les applications Web et la cybersécurité.
                </b>
              </i>
              <br />
              <br />
              Je maitrise aussi quelque framework comme <b className="purple">react.js | bootstrap | SAAS | jQuery</b>  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Retrouvez moi sur</h1>
    
            <ul className="home-about-social-links">
            
              {/* <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
            
            <li className="social-icons">
                <a
                  href="tel:0749404145"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaPhone/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:bahibrahima245857@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://github.com/bahEzope224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
              
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ibrahima-talib%C3%A9-bah-8215261b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ibrahima_75b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <p>
                <br></br>
              Je serais <span className="purple">RAVIS </span>de vous répondre
            </p>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
