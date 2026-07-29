import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  tools,
} from "../../content_option";
import useGoogleAnalytics from "../../hooks/useGoogleAnalytics ";

export const About = () => {
  useGoogleAnalytics('G-ZVC52HVG8Q')
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4" style={{fontSize:'3.8rem'}}>About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
            <div style={{fontSize:'1.8rem'}}>
              {dataabout.aboutme}
              {/* <p>{dataabout.aboutme} * ' 
                <span> 
                  <a target='_blank' href='http://54.70.119.142:3000/'>Virtual Notebook</a>' --- (Please refrain from putting in sensitive information. :D)
                </span>
              </p> */}
            </div>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4" style={{fontSize:'2rem'}}>Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i} style={{fontSize:'1.5rem'}}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4" style={{fontSize:'2rem'}}> Languages & Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title" style={{fontFamily: "'VT323', monospace", fontSize:'1.5rem'}}>{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                        fontSize: '1.5rem',
                      }}
                    >
                      <div className="progress-value" style={{fontSize:'1.5rem'}}>{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4" style={{fontSize:'2rem'}}>Frameworks & Technologies</h3>
          </Col>
          <Col lg="7">
            {tools.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title" style={{fontSize:'1.5rem'}}>{data.title}</h5>
                  <p className="service_desc" style={{fontSize:'1.5rem'}}>{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
