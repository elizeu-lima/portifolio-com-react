import { Col } from "react-bootstrap"

export const ProjectCard = (prop: {title: string, description: string, imgUrl:string}) => {

 
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={prop.imgUrl}/>

                <div className="proj-txtx">
                    <h4>{prop.title}</h4>
                    <span>{prop.description}</span>
                </div>
            </div>
        </Col>
    )
}