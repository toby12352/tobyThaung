import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";
import useGoogleAnalytics from "../../hooks/useGoogleAnalytics ";
import { usePageToc } from "../../hooks/usePageToc";
import { PageTocDesktop, PageTocMobile } from "../../components/page-toc";

const TOC_ITEMS = [
  { id: "enb-problem", label: "The Problem" },
  { id: "enb-solution", label: "The Solution" },
  { id: "enb-research", label: "Research & Impact" },
  { id: "enb-next", label: "What's Next" },
];

export const Enb = () => {
  useGoogleAnalytics("G-ZVC52HVG8Q");
  const toc = usePageToc(TOC_ITEMS);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> eNotebook | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/my-work">My Work</Link>
              <span className="page-breadcrumb-sep" aria-hidden="true">
                {" "}
                &gt;{" "}
              </span>
              <span>eNotebook</span>
            </nav>
            <h1 className="display-4 mb-4" style={{ fontSize: "3.8rem" }}>
              eNotebook
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <p className="enb-lead">
              eNotebook (eNb) is an AI-based personalized learning notebook that helps
              STEM students build study strategies - turning notes and tutor chat
              into study guides, flashcards, and practice assessments in one place.
            </p>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <div className="enb-btn-row">
              <a
                href="https://enotebook.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text_2"
              >
                <div
                  id="button_p"
                  className="ac_btn btn"
                  style={{ fontSize: "1.5rem" }}
                >
                  Visit eNotebook
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </a>
              <Link to="/enb-developer-page" className="text_2">
                <div
                  id="button_h"
                  className="ac_btn btn"
                  style={{ fontSize: "1.5rem" }}
                >
                  eNotebook Developer News
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </Link>
            </div>
          </Col>
        </Row>

        <PageTocMobile toc={toc} />

        <Row className="page-toc-content-row">
          <Col lg="9" className="enb-content-main">
            <section id="enb-problem" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                The Problem
              </h3>
              <p className="enb-body">
                Online and hybrid STEM courses ask students to self-regulate
                learning with far less day-to-day interaction and feedback than
                face-to-face classes.
              </p>
              <p className="enb-body">
                Organized study habits are essential, yet research cited in our ASEE
                work-in-progress shows that <b>49% of online students do not take
                notes</b>, and roughly <b>70% do not complete course readings</b>.
                Even after strong study-method workshops, many students find the
                methods time-consuming and hard to apply.
              </p>
              <p className="enb-body">
                Students already juggle apps, videos, social media, homework banks,
                tutoring services, and AI tools but few tools help them observe,
                evaluate, and adjust how they learn over a full term.
              </p>
            </section>

            <section id="enb-solution" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                The Solution
              </h3>
              <p className="enb-body">
                We built eNotebook as a web-based notebook that combines note-taking,
                an AI tutor, and study artifacts under one roof - shaped by feedback
                from <b>100+ university students</b>, including learners who use
                Disability Access Services.
              </p>

              <h4 className="enb-h4">AI tutor + voice study companion</h4>
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Students need personalized help catching up, not
                  another disconnected chatbot tab.
                </li>
                <li>
                  <b>Action:</b> We shipped Jarvis - an audio-to-text / text-to-audio
                  conversation feature powered by a ChatGPT engine, with activation
                  words and voice options students can customize.
                </li>
                <li>
                  <b>Result:</b> Learners can talk through material (for example,
                  calculus catch-up) inside the same notebook where their notes live.
                </li>
              </ul>

              <h4 className="enb-h4">Notes, media, and study methods in one place</h4>
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Study workflows scatter across handwriting, PDFs,
                  videos, and dozens of third-party apps.
                </li>
                <li>
                  <b>Action:</b> eNotebook supports typed and handwritten notes
                  (handwriting to text), cloud-stored images/audio/video/links, and a
                  menu of <b>50+ popular study apps</b> identified by students -
                  favorites rise to the top.
                </li>
                <li>
                  <b>Result:</b> One web-accessible workspace on PC, Mac, phone, or
                  tablet, instead of a fragile stack of separate tools.
                </li>
              </ul>

              <h4 className="enb-h4">Study guides, flashcards, and practice tests</h4>
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Chat alone does not prove learning or create
                  durable practice materials.
                </li>
                <li>
                  <b>Action:</b> We generate AI study guides, flashcards, and practice
                  assessments - including how/why checks timed and remembered for
                  progress reporting - and keep interaction memory across the term
                  so personalization can improve.
                </li>
                <li>
                  <b>Result:</b> Students revisit structured artifacts and practice
                  over any date range of their interactions, not just a disposable
                  chat thread.
                </li>
              </ul>

              <h4 className="enb-h4">Better AI answers for real learners</h4>
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Not every student knows how to prompt AI well.
                </li>
                <li>
                  <b>Action:</b> Behind the scenes we iterate and refine questions,
                  load relevant course context with the learner&apos;s ask, and offer
                  customized Q&amp;A actions (simplify, prerequisites, real-world
                  examples, or student-defined prompts like &quot;explain it like
                  I&apos;m 5&quot;).
                </li>
                <li>
                  <b>Result:</b> Higher-quality responses without requiring prompt
                  engineering expertise.
                </li>
              </ul>
            </section>

            <section id="enb-research" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                Research &amp; Impact
              </h3>
              <p className="enb-impact-note">
                Framed as an ASEE Work-in-Progress research plan - expected outcomes
                and pilot design, not live marketplace KPIs yet.
              </p>
              <p className="enb-body">
                The study aims to pilot eNotebook&apos;s AI-enhanced study features
                and investigate how the app supports self-regulatory efficacy in
                Ecampus and hybrid STEM courses.
              </p>
              <ul className="enb-list">
                <li>
                  <b>Participants:</b> Undergraduates in ENGR 100 and ENGR 102
                  (Automating the Future), with an expected cohort of roughly half
                  the enrolled students (~122) based on prior participation.
                </li>
                <li>
                  <b>Methods:</b> Usability focus groups and heuristic evaluation for
                  inclusive UI/UX; Likert scales adapted from Bandura&apos;s
                  self-efficacy measures; quasi-experimental control vs. experimental
                  groups for efficacy outcomes.
                </li>
                <li>
                  <b>Expected outcomes:</b> A tested prototype; usability findings
                  (including accessibility); STEM learning materials that support
                  self-regulated learning; and data on how eNotebook relates to
                  students&apos; self-regulation efficacy.
                </li>
              </ul>
              <p className="enb-body">
                The design was informed by prototype feedback from{" "}
                <b>140 university students</b> during Fall 2022, then iterated with
                EECS collaborators into the product students use today at{" "}
                <a
                  href="https://enotebook.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  enotebook.ai
                </a>
                .
              </p>
            </section>

            <section id="enb-next" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                What&apos;s Next
              </h3>
              <ul className="enb-list">
                <li>
                  Continue usability inspection and accessibility hardening for
                  Ecampus and hybrid classrooms
                </li>
                <li>
                  Run the planned control / experimental comparison on
                  self-regulatory efficacy
                </li>
                <li>
                  Correlate study habits and quiz progress with suggested
                  improvements inside the product
                </li>
                <li>
                  Expand shared libraries and study-method templates so students can
                  reuse what works
                </li>
              </ul>
              <p className="enb-body">
                For the engineering deep dive - streaming tutor chat, tool-driven
                artifacts, sessions, and Stripe gating - open{" "}
                <Link to="/enb-developer-page">eNotebook Developer News</Link>.
              </p>
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
