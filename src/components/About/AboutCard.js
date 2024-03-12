import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, Je suis <span className="yellow">Bah Ibrahima</span>, <br />
            <br />
            Je suis actuellement en deuxième année de <strong className="purple">BTS SIO </strong> (Services informatiques aux Organisations) option <strong className="purple">SLAM</strong> (Solutions Logicielles et Applications Métiers).
            <br />
            J'ai obtenu un <strong className="purple">baccalauréat général</strong>  avec les spécialité <strong className="purple">Physique-chimie</strong> et <strong className="purple"> Numerique et Science de l'Informatiques.</strong>
            <br />
            <br />
            Mis à part la programmation, voici d'autres activités que j'adore faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Lecture
            </li>
            <li className="about-activity">
              <ImPointRight /> Cuisiner
            </li>
            <li className="about-activity">
              <ImPointRight /> Cinema
            </li>
          </ul>

          <p style={{ color: "#1baf91cd" }}> <i>"Le seul moyen de faire du bon travail est d'aimer ce que vous faites."{" "}</i>
            
          </p>
          <footer className="blockquote-footer"><strong>Steve Jobs</strong></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
