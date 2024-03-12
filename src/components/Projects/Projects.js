import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jo2024 from "../../Assets/Projects/jo2024.png";
import qalamsoftware from "../../Assets/Projects/qalamsoftware.png";
import etudePerfoBourse from "../../Assets/Projects/perfobourse.png";
import disneyPlus from "../../Assets/Projects/disneyplus.png";
import projetBiblio from "../../Assets/Projects/projet-biblo.png";





function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
          Quelques projets auxquels j'ai travaillé récemment

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etudePerfoBourse}
              isBlog={false}
              title="Etude de performance boursière              "
              description="Ce programme Python récupère les données de prix des actions de certaines entreprises sur les 5 dernières années à l'aide de la bibliothèque yfinance. Ensuite, il effectue une analyse des actions en calculant les rendements journaliers, la volatilité annualisée, le rendement cumulé, le rendement annualisé et le ratio de Sharpe. Finalement, il recommande les actions à investir en se basant sur le ratio de Sharpe. "
              ghLink="https://github.com/bahEzope224/etude-perfo-bourse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disneyPlus}
              isBlog={false}
              title="Projet de fin d'année première année BTS SIO"
              description="Ce projet a été réalisé dans le cadre de ma première année de BTS Services Informatiques aux Organisations (SIO). L'objectif était de la page d'accueil pour le service de streaming Disney+ en utilisant les langages HTML et CSS et JavaScript. La page présente une mise en page moderne et réactive, s'adaptant aux différents appareils tels que les ordinateurs, les tablettes et les smartphones. Elle comporte plusieurs sections mettant en avant les atouts de Disney+, comme ses contenus exclusifs, sa compatibilité avec divers appareils et ses fonctionnalités."
              ghLink="https://github.com/bahEzope224/projet-disney-plus"
              demoLink="https://disneyplus-ibrahima.netlify.app/"
              BTdownload = "https://drive.google.com/file/d/1PAwM1ZzjIWvJz5kMrD9La2QsqarqIW5K/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qalamsoftware}
              isBlog={false}
              title="Qalam Software" 
              description="Création d'un site WordPress avec Elementor de l'entreprise Qalam Software pour présenter de manière efficace et attractive ses services, ses partenaires et ses projets réalisés. Ce stage a constitué une étape importante de ma formation, me permettant d'appliquer les connaissances théoriques acquises en classe et de découvrir le fonctionnement concret d'une entreprise évoluant dans le domaine des technologies de l'informatique. "
              demoLink="https://qalamsoftware.fr/"  
              ghLink="https://github.com/bahEzope224/jo-2024-bah-ibrahima"
            
            />
          </Col>

          <Col md={4} className="project-card">
            
            <ProjectCard
              imgPath={jo2024}
              isBlog={false}
              title="Epreuve E5 BTS SIO"
              description="Ce projet est une application web complète pour les Jeux Olympiques de 2024. Il permet la gestion des athlètes pour les administrateurs et fournit aux utilisateurs des informations détaillées sur les JO, telles que le calendrier des événements, les résultats passés, les détails des lieux et des sports. De la gestion interne à la consultation externe, cette application offre une plateforme centrale pour suivre et les Jeux Olympiques de 2024. "
              demoLink="https://jo-2024-ibrahima.free.nf/"
              ghLink="https://github.com/bahEzope224/jo-2024-bah-ibrahima"
              BTdownload = "https://drive.google.com/file/d/1afFgQcjmi2ehwlWWabGUQZFXQwAZYqHd/view?usp=sharing"
              
              
            />
           
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetBiblio}
              isBlog={false}
              title="E5 Bibliothèque"
              description="
              Ce projet a été réalisé dans le cadre de l'épreuve E5 pour l'obtention de mon diplôme de BTS (Brevet de Technicien Supérieur). Il consistait à automatiser le processus de gestion des emprunts à la bibliothèque municipale. L'objectif principal de ce projet était de concevoir et de développer un système de gestion automatisée permettant aux adhérents de la bibliothèque municipale d'emprunter et de retourner des livres de manière autonome, tout en facilitant le travail des bibliothécaires."
              ghLink="https://github.com/bahEzope224/Projet-java-E5"
              BTdownload="https://drive.google.com/file/d/191ZNhjpq0kT7S6TKdDmEZk3gK6DXHlOJ/view?usp=sharing"            
              />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
       <p className="cdc"> *CDC = Cahier De Charge </p>
      </Container>
    </Container>
  );
}

export default Projects;
