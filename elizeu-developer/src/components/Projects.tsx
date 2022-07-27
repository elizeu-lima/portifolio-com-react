import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from  "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img1.png";
import projImg5 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img3.png";


export const Projects = () =>{
    const projects = [

            {
                title: "Business Startup",
                descripition: "Desing & Developent",
                imgUrl: projImg1,
            },
            {
                title: "Business Startup",
                descripition: "Desing & Developent",
                imgUrl: projImg2,
            },
            {
                title: "Business Startup",
                descripition: "Desing & Developent",
                imgUrl: projImg3,
            },
            {
                title: "Business Startup",
                descripition: "Desing & Developent",
                imgUrl: projImg4,
            },
            {
                title: "Business Startup",
                descripition: "Desing & Developent",
                imgUrl: projImg5,
            },
            {
                title: "Business Startup",
                descripition: "Desing & Developent",
                imgUrl: projImg6,
            },
        ];

        return(
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet ornare nisi nec ultricies. Cras ante odio, volutpat vitae accumsan vitae, <br></br> mattis in risus. Morbi enim nisl, lobortis non lorem sed, pharetra faucibus lectus. Aliquam rhoncus nibh eget neque molestie, eu</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-content-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab third</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return(
                                                        <ProjectCard
                                                            description={""} key={index}
                                                            {...project}                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                    <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>

                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}></img>
            </section>
        )
}