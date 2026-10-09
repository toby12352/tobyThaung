import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta, dataresume } from "../../content_option";
import useGoogleAnalytics from "../../hooks/useGoogleAnalytics ";
import { usePageToc } from "../../hooks/usePageToc";
import { PageTocDesktop, PageTocMobile } from "../../components/page-toc";
import resumePdf from "../../assets/resume/TunAung_Thaung_resume.pdf";

const TOC_ITEMS = [
  { id: "resume-experience", label: "Experience" },
  { id: "resume-education", label: "Education" },
  { id: "resume-skills", label: "Skills" },
];

export const Resume = () => {
  useGoogleAnalytics("G-ZVC52HVG8Q");
  const toc = usePageToc(TOC_ITEMS);
  const { name, title, summary, contact, experience, education, skills } =
    dataresume;

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title} </title>
          <meta name="description" content={summary} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/my-work">My Work</Link>
              <span className="page-breadcrumb-sep" aria-hidden="true">
                {" "}
                &gt;{" "}
              </span>
              <span>Resume</span>
            </nav>
            <h1 className="display-4 mb-2" style={{ fontSize: "3.8rem" }}>
              {name}
            </h1>
            <p className="resume-subtitle">{title}</p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <p className="resume-lead">{summary}</p>
            <div className="resume-contact">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span className="resume-contact-sep" aria-hidden="true">
                ·
              </span>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>
                {contact.phone}
              </a>
              <span className="resume-contact-sep" aria-hidden="true">
                ·
              </span>
              <a
                href={contact.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.website}
              </a>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <a
              href={resumePdf}
              download="TunAung_Thaung_resume.pdf"
              className="text_2"
            >
              <div
                id="button_p"
                className="ac_btn btn"
                style={{ fontSize: "1.5rem" }}
              >
                Download PDF
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </a>
          </Col>
        </Row>

        <PageTocMobile toc={toc} />

        <Row className="page-toc-content-row">
          <Col lg="9">
            <section
              id="resume-experience"
              className="sec_sp page-toc-section"
            >
              <h3
                className="color_sec py-4 resume-h3"
                style={{ fontSize: "2rem" }}
              >
                Experience
              </h3>
              <ol className="resume-timeline">
                {experience.map((job, i) => (
                  <li key={i} className="resume-role">
                    <div className="resume-role-header">
                      <h4 className="resume-company">{job.company}</h4>
                      <span className="resume-dates">{job.dates}</span>
                    </div>
                    <p className="resume-role-meta">
                      {job.role}
                      <span className="resume-meta-sep" aria-hidden="true">
                        ·
                      </span>
                      {job.location}
                    </p>
                    <ul className="resume-bullets">
                      {job.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

            <section
              id="resume-education"
              className="sec_sp page-toc-section"
            >
              <h3
                className="color_sec py-4 resume-h3"
                style={{ fontSize: "2rem" }}
              >
                Education
              </h3>
              <ul className="resume-education-list">
                {education.map((edu, i) => (
                  <li key={i} className="resume-education-item">
                    <div className="resume-role-header">
                      <h4 className="resume-company">{edu.school}</h4>
                      <span className="resume-dates">{edu.dates}</span>
                    </div>
                    <p className="resume-role-meta">
                      {edu.degree}
                      <span className="resume-meta-sep" aria-hidden="true">
                        ·
                      </span>
                      {edu.location}
                    </p>
                    {edu.detail && (
                      <p className="resume-edu-detail">{edu.detail}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section id="resume-skills" className="sec_sp page-toc-section">
              <h3
                className="color_sec py-4 resume-h3"
                style={{ fontSize: "2rem" }}
              >
                Skills
              </h3>
              <div className="resume-skills">
                {skills.map((group, i) => (
                  <div key={i} className="resume-skill-group">
                    <h4 className="resume-skill-category">{group.category}</h4>
                    <p className="resume-skill-items">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Col>

          <Col lg="3" className="page-toc-col d-none d-lg-block">
            <PageTocDesktop toc={toc} />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
