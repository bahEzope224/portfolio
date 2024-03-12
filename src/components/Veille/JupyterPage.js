import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import JupyterImg from "../../Assets/veille-technologique.png";

function JupyterPage() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            C'est quoi une <strong className="purple"> Veille Technologique</strong> ?
                        </h1>
                        <p>
                            En tant que étudiant en<strong className="purple"> développement web</strong>, il est essentiel 
                            de rester à l'affût des dernières avancées <strong className="purple">technologiques </strong>. 
                            Dans notre domaine, nous sommes constamment en train d'apprendre et de nous développer, et pour cela, 
                            nous devons nous immerger dans les <strong className="purple">communautés de développeurs </strong>. 
                            Ces communautés sont des mines d'or pour découvrir de<strong className="purple"> nouveaux outils, langages</strong> et <strong className=""> bibliothèques </strong> . qui
                             peuvent grandement nous aider dans notre travail quotidien.

                        </p>
                        <p>
                            {/* Il est largement utilisé dans le domaine de la science des
                            données, de l'apprentissage automatique, de l'enseignement et de
                            la recherche. */}
                        </p>
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "30px", paddingBottom: "50px" }}
                        className="about-img">
                    
                        <img src={JupyterImg} alt="veille technolique" className="img-fluid" />
                    </Col>
                </Row>
                <br />
                <br />
                <h1 className="project-heading">
                    {/* Compétences <strong className="purple">techniques</strong> associées */}
                </h1>
                {/* <Techstack /> */}

                <h1 className="project-heading">
                    {/* <strong className="purple">Outils</strong> utilisés avec Jupyter Notebook */}
                </h1>
                {/* <Toolstack /> */}
            </Container>
        </Container>
    );
}

export default JupyterPage;
