import { Col } from "react-bootstrap";
import { FaGithub } from 'react-icons/fa'


export const ProjectCard = ({ title, description, imgUrl, Click }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        
        <img src={imgUrl} alt="" /> <div className="proj-txtx">
        <button  className="Git">  <span> <FaGithub onClick={Click} size={32} color="#light" /></span></button> 
          <h4 >{title} </h4>

          <span>{description}</span>
         
        </div>
       
      </div>
    </Col>
  )
}