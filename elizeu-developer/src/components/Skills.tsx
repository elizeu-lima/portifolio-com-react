import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive ={
        superLargeDesktop:{
            //the naming can be any, depends on you.   
            breakpoint:{max: 4000, min: 300},
            items:5
        },
        desktop:{
            breakpoint:{max:3000, min: 1024},
            items:3
        },
        tablet:{
            breakpoint:{max:1024, min: 464},
            items:2
        },
        mobile: {
            breakpoint:{max: 464, min: 0},
            items:1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet ornare nisi nec ultricies. Cras ante odio, volutpat vitae accumsan vitae, <br></br> mattis in risus. Morbi enim nisl, lobortis non lorem sed, pharetra faucibus lectus. Aliquam rhoncus nibh eget neque molestie, eu</p>
                        
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}