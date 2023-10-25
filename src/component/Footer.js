import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/git-commit-svgrepo-com.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import github from '../assets/img/github-mark.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/diego-ranon-986b0120a/" target="_blank"><img src={navIcon1} /></a>
                            <a href="https://github.com/DiegoRanon" target="_blank"><img src={github} /></a>
                        </div>
                    </Col>
                    <p>CopyRight 2022. All Right Reserved By Diego Ranon</p>
                </Row>
            </Container>
        </footer>
    )
}