import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";
import useGoogleAnalytics from "../../hooks/useGoogleAnalytics ";
import { usePageToc } from "../../hooks/usePageToc";
import { PageTocDesktop, PageTocMobile } from "../../components/page-toc";

import imgSystemContext from "../../assets/eNb/Diagram 1 System Context (top-level architecture).png";
import imgStreamingTools from "../../assets/eNb/Diagram 2 Chat Streaming + Tool Orchestration (core AI tutor flow).png";
import imgVoyagerArtifactGeneration from "../../assets/eNb/Diagram 3 Voyager Artifact Generation.png";

const TOC_ITEMS = [
  { id: "enb-dev-context", label: "System Context" },
  { id: "enb-dev-architecture", label: "Core Architecture" },
  { id: "enb-dev-sessions", label: "Secure sessions" },
  { id: "enb-dev-subscription", label: "Subscription lifecycle" },
  { id: "enb-dev-media", label: "Media understanding" },
  { id: "enb-dev-data", label: "Data model" },
  { id: "enb-dev-voyager", label: "Voyager Artifacts" },
  { id: "enb-dev-security", label: "Security & scalability" },
  { id: "enb-dev-enables", label: "What this enables" },
];

export const EnbDeveloperPage = () => {
  useGoogleAnalytics("G-ZVC52HVG8Q");
  const toc = usePageToc(TOC_ITEMS);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> eNotebook Developer News | {meta.title} </title>
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
              <Link to="/enb">eNotebook</Link>
              <span className="page-breadcrumb-sep" aria-hidden="true">
                {" "}
                &gt;{" "}
              </span>
              <span>Developer News</span>
            </nav>
            <h1 className="display-4 mb-4" style={{ fontSize: "3.8rem" }}>
              eNb Developer News
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <p className="enb-lead">
              eNotebook turns learner notes and tutor chat into study guides, flashcards,
              and practice quizzes through streaming AI, tool-driven workflows, and a
              secure subscription-gated backend.
            </p>
          </Col>
        </Row>

        <PageTocMobile toc={toc} />

        <Row className="page-toc-content-row">
          <Col lg="9">
            <section id="enb-dev-context" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                System Context
              </h3>
              <img className="enb-img" src={imgSystemContext} alt="System context diagram" />
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Learners need one cohesive app for notes, tutoring, billing,
                  and media-not fragmented tools that drift out of sync.
                </li>
                <li>
                  <b>Action:</b> I built a React + Vite SPA that talks to a Flask + Socket.IO
                  backend over REST and websockets, with MongoDB, AWS S3, Stripe, and LLM providers
                  (OpenAI, Groq, Gemini) orchestrating persistence and generation.
                </li>
                <li>
                  <b>Result:</b> Notes, chat, billing, and media share one runtime path, so the
                  product feels unified instead of stitched together.
                </li>
              </ul>
            </section>

            <section id="enb-dev-architecture" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                Core Architecture Decisions
              </h3>
              <img
                className="enb-img"
                src={imgStreamingTools}
                alt="Streaming and tool orchestration diagram"
              />
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Chat-only UX feels slow, and conversation alone does not produce
                  durable study materials learners can revisit.
                </li>
                <li>
                  <b>Action:</b> I wired Socket.IO streaming (<code>stream_conversation_request</code>,{" "}
                  <code>reply</code>, <code>tool_output</code>) to a tool registry that executes
                  LLM-requested functions and persists artifacts to MongoDB.
                </li>
                <li>
                  <b>Result:</b> Users get low-latency tutor responses and first-class artifact views
                  (study guides, flashcards, quizzes) inside the same session.
                </li>
              </ul>
            </section>

            <section id="enb-dev-sessions" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                Secure sessions + premium gating
              </h3>
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Premium features must not rely on client-side checks that users
                  can bypass or that drift from server state.
                </li>
                <li>
                  <b>Action:</b> I implemented cookie-based JWT auth with CSRF protection (
                  <b>X-CSRF-TOKEN</b> header), server-side tier decorators, and client handling of{" "}
                  <b>403</b> responses that triggers an upgrade flow.
                </li>
                <li>
                  <b>Result:</b> Entitlement stays server-truth; the client only reacts to what the
                  backend allows.
                </li>
              </ul>
            </section>

            <section id="enb-dev-subscription" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                Subscription lifecycle
              </h3>
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Billing state drift breaks access control when payment status
                  lives only in the client or in Stripe alone.
                </li>
                <li>
                  <b>Action:</b> I integrated Stripe checkout, portal, and webhook endpoints so
                  events update <code>user_tier</code> in MongoDB as the source of truth.
                </li>
                <li>
                  <b>Result:</b> Access always matches paid status without client-side guessing.
                </li>
              </ul>
            </section>

            <section id="enb-dev-media" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                Media understanding
              </h3>
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Image tutoring bloats chat payloads if raw bytes travel through
                  the conversation stream.
                </li>
                <li>
                  <b>Action:</b> I built an upload pipeline (<code>POST /api/uploads/image</code>)
                  and view-URL retrieval (<code>GET /api/uploads/view-url</code>) backed by S3 with
                  controlled access.
                </li>
                <li>
                  <b>Result:</b> Chat stays lightweight while history renders images safely from
                  stored references.
                </li>
              </ul>
            </section>

            <section id="enb-dev-data" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                Data model overview
              </h3>
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Generated artifacts must trace back to what the learner wrote
                  and discussed, or study materials lose context.
                </li>
                <li>
                  <b>Action:</b> I scoped MongoDB collections per user (<code>users</code>,{" "}
                  <code>notes</code>, <code>conversations</code>, <code>user_quizzes</code>,{" "}
                  <code>user_study_guides</code>, <code>user_flashcards</code>) with UUID-based
                  artifact retrieval.
                </li>
                <li>
                  <b>Result:</b> Fast per-learner CRUD and every study artifact links to its
                  originating conversation.
                </li>
              </ul>
            </section>

            <section id="enb-dev-voyager" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                Voyager Artifact Generation
              </h3>
              <img
                className="enb-img enb-img-tight"
                src={imgVoyagerArtifactGeneration}
                alt="Voyager artifact generation diagram"
              />
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Generation and viewing are different jobs; coupling them in one
                  UI step adds complexity and hurts caching.
                </li>
                <li>
                  <b>Action:</b> I separated REST generation (returns a UUID) from viewer fetch (
                  <code>{'GET /api/user/study_guides/{uuid}'}</code>, flashcards, quizzes) so the SPA
                  renders stored artifacts on demand.
                </li>
                <li>
                  <b>Result:</b> Simpler UI, easier re-render, and long-running generation does not
                  block the chat experience.
                </li>
              </ul>
            </section>

            <section id="enb-dev-security" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                Security & scalability posture
              </h3>
              <ul className="enb-list">
                <li>
                  <b>Problem:</b> Production AI apps need defense in depth, not a single auth check
                  at login.
                </li>
                <li>
                  <b>Action:</b> I layered CSRF protection, cookie auth, presigned media access,
                  server-side tier gating, and webhook-driven billing on top of streaming generation.
                </li>
                <li>
                  <b>Result:</b> The system stays responsive (streaming reduces time-to-first-token)
                  without sacrificing correctness or access control.
                </li>
              </ul>
            </section>

            <section id="enb-dev-enables" className="sec_sp page-toc-section">
              <h3 className="color_sec py-4 enb-h3" style={{ fontSize: "2rem" }}>
                What this architecture enables
              </h3>
              <ul className="enb-list">
                <li>
                  <b>Overview:</b> A tutor chat that streams in real time and produces structured
                  study artifacts as first-class experiences-not just text in a thread.
                </li>
                <li>
                  <b>Result:</b> Subscription-gated premium generation, media-enhanced tutoring,
                  and recruiter-visible maturity signals: Socket.IO streaming, tool orchestration,
                  production session patterns, and Stripe webhook billing.
                </li>
              </ul>
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
