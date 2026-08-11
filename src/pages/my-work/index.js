import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { datafeatured, datapersonal, meta } from "../../content_option";
import useGoogleAnalytics from "../../hooks/useGoogleAnalytics ";
import { Link } from "react-router-dom";

const ProjectTiles = ({ items, keyPrefix }) => (
  <div className="po_list">
    {items.map((data, i) => (
      <div key={`${keyPrefix}-${i}`} className="po_row">
        <div
          className="po_media"
          style={data.bg ? { background: data.bg } : undefined}
        >
          <img src={data.img} alt="" />
        </div>
        <div className="po_details">
          <p className="po_description">{data.description}</p>
          {data.link && data.link.startsWith("/") ? (
            <Link to={data.link} className="po_btn">
              view
            </Link>
          ) : (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.link}
              className="po_btn"
            >
              view
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

export const MyWork = () => {
  useGoogleAnalytics("G-ZVC52HVG8Q");

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> My Work | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4" style={{ fontSize: "3.8rem" }}>
              {" "}
              My Work{" "}
            </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <ProjectTiles items={datafeatured} keyPrefix="featured" />

        <Row className="sec_sp">
          <Col lg="8">
            <h3
              className="color_sec py-4 po_section_title"
              style={{ fontSize: "2rem" }}
            >
              Personal Projects
            </h3>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <ProjectTiles items={datapersonal} keyPrefix="personal" />
      </Container>
    </HelmetProvider>
  );
};
