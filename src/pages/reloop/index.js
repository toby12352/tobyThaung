import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";
import useGoogleAnalytics from "../../hooks/useGoogleAnalytics ";

import imgBigPicture from "../../assets/reloop/3) Big picture diagram (containers + data flow).png";
import imgAnalysis from "../../assets/reloop/screenshots/analysis.png";

export const ReLoop = () => {
  useGoogleAnalytics("G-ZVC52HVG8Q");

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> ReLoop | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4" style={{ fontSize: "3.8rem" }}>
              ReLoop
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <p className="reloop2-lead">
              ReLoop is a mobile-first marketplace that connects Vientiane food
              vendors with customers who want to buy end-of-day surplus at a
              discount - reducing waste while giving both sides a better deal.
            </p>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <Link to="/reloop_developer_page" className="text_2">
              <div id="button_p" className="ac_btn btn" style={{ fontSize: "1.5rem" }}>
                Reloop Developer News
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop2-h3" style={{ fontSize: "2rem" }}>
              The Problem
            </h3>
            <p className="reloop2-body">
              Vientiane&apos;s food-service sector throws away an estimated{" "}
              <b>29,000–31,000 tonnes of food per year</b>. Bakeries, cafés, and
              hotel buffets often have predictable surplus at closing time, but
              there is no simple way to sell it before it is discarded.
            </p>
            <p className="reloop2-body">
              Customers want discounted food. Vendors want to recover some
              revenue instead of paying disposal costs. Neither side has a
              trusted, low-friction channel to meet.
            </p>
            <p className="reloop2-body">
              The business case is clear: OpenStreetMap data shows{" "}
              <b>817 restaurants and 313 cafés</b> in Vientiane - a planning
              universe of <b>1,100–1,500+ merchants</b>. At even conservative
              waste levels (2–4 kg per outlet per day), the city could support{" "}
              <b>4,500–9,000 rescue bags daily</b>. Laos also has{" "}
              <b>4.97 million internet users</b>, so a mobile-first product can
              reach buyers where they already are.
            </p>
            <p className="reloop2-body">
              The product challenge is different. Our team could not afford a
              fragile stack, a separate vendor app, or payment logic that breaks
              under real money. The system must be secure, cheap to run, and
              fast to iterate - starting with a <b>pickup-first</b> model that
              keeps logistics simple until marketplace density grows.
            </p>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop2-h3" style={{ fontSize: "2rem" }}>
              Our Role
            </h3>
            <p className="reloop2-body">
              Our ReLoop team designed and built the full v1 product architecture
              end to end:
            </p>
            <ul className="reloop2-list">
              <li>
                <b>Mobile app</b> - one Expo binary with separate customer and
                vendor experiences (<code>apps/mobile</code>)
              </li>
              <li>
                <b>Backend</b> - Supabase Postgres with Row Level Security, Auth,
                Storage, and Edge Functions
              </li>
              <li>
                <b>Shared domain layer</b> - types, validation rules, and i18n in{" "}
                <code>packages/shared</code>
              </li>
              <li>
                <b>Database schema</b> - SQL migrations, RLS policies, and safe
                evolution workflows in <code>supabase/migrations</code>
              </li>
              <li>
                <b>Documentation</b> - schema reference, architecture rules, and
                data-flow docs that keep future changes safe
              </li>
            </ul>
            <p className="reloop2-body">
              We did not just sketch diagrams. We shipped working flows: vendor
              listing create/edit, photo upload, validation, dashboard
              aggregation, and the data model that supports orders and payments.
            </p>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop2-h3" style={{ fontSize: "2rem" }}>
              The Solution
            </h3>

            <h4 className="reloop2-h4">Start small, prove density in one city</h4>
            <ul className="reloop2-list">
              <li>
                <b>Problem:</b> Launching every restaurant type at once would
                burn time and logistics cost before density exists.
              </li>
              <li>
                <b>Action:</b> We scoped the launch around predictable surplus -
                bakeries, cafés, and buffets - with a pickup-first model until
                merchants and buyers share the same area.
              </li>
              <li>
                <b>Result:</b> A clear 90-day target of{" "}
                <b>100 active merchants</b>, measured by bags per merchant per
                day, sell-through, repeat purchases, and refund rate - not
                vanity downloads.
              </li>
            </ul>

            <h4 className="reloop2-h4">One app, two experiences</h4>
            <ul className="reloop2-list">
              <li>
                <b>Problem:</b> Separate customer and vendor apps double deploy
                cost and drift apart.
              </li>
              <li>
                <b>Action:</b> We built a single Expo app with route groups for
                auth, customers, and vendors.{" "}
                <b>Stack:</b> Expo Router, React Query, TypeScript, Supabase
                (Postgres + RLS + Auth + Storage + Edge Functions), PhaJay for
                LAK payments.
              </li>
              <li>
                <b>Result:</b> One codebase, one deploy, and half the maintenance
                of two apps - vendors get listings and a dashboard; customers get
                browse and reserve.
              </li>
            </ul>

            <h4 className="reloop2-h4">Make listing creation reliable</h4>
            <ul className="reloop2-list">
              <li>
                <b>Problem:</b> Vendors need to publish a surplus bag in minutes
                without orphaned rows when a photo upload fails.
              </li>
              <li>
                <b>Action:</b> Screens orchestrate (
                <code>create-listing.tsx</code>,{" "}
                <code>edit-listing/[id].tsx</code>); domain rules live in{" "}
                <code>listing-field-validation.ts</code>;{" "}
                <code>listing.ts</code> inserts, uploads, links{" "}
                <code>listing_images</code>, and rolls back on failure. We also
                lock commercial fields when open orders exist.
              </li>
              <li>
                <b>Result:</b> Validation catches bad pickup windows, price
                relationships, and categories before the database - create
                requires a photo; edit can keep the existing cover.
              </li>
            </ul>

            <h4 className="reloop2-h4">Align the database with the app</h4>
            <ul className="reloop2-list">
              <li>
                <b>Problem:</b> App and database disagree when category or photo
                rules live in different places.
              </li>
              <li>
                <b>Action:</b> We used a constrained string column on{" "}
                <code>listings</code> (shared TypeScript types + Postgres CHECK),
                safe migrations (backfill → default → NOT NULL → constraint), and
                Storage paths like{" "}
                <code>{"{partner_id}/{listing_id}/cover.jpg"}</code> linked via{" "}
                <code>listing_images</code>.
              </li>
              <li>
                <b>Result:</b> The app and database never disagree on category,
                and photos stay tied to the listing - not parked on the partner
                row.
              </li>
            </ul>

            <h4 className="reloop2-h4">Secure by default</h4>
            <ul className="reloop2-list">
              <li>
                <b>Problem:</b> Real money moves through PhaJay; a client-side
                “paid” flag is not trustworthy.
              </li>
              <li>
                <b>Action:</b> Every table uses Row Level Security. Customers see
                only active listings from approved partners; vendors reach their
                store through <code>partner_members</code>. Payment confirmation
                runs through Edge Functions and webhooks.
              </li>
              <li>
                <b>Result:</b> The mobile app never marks an order as paid on its
                own. We trust the webhook, not the redirect URL.
              </li>
            </ul>

            <h4 className="reloop2-h4">Document as we build</h4>
            <ul className="reloop2-list">
              <li>
                <b>Problem:</b> Schema changes without shared docs become
                expensive six months later.
              </li>
              <li>
                <b>Action:</b> We wrote schema docs, architecture rules, and
                migration checklists alongside the code - updating the migration,
                shared types, and docs in the same pass.
              </li>
              <li>
                <b>Result:</b> The project stays maintainable as the team
                iterates.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop2-h3" style={{ fontSize: "2rem" }}>
              System at a Glance
            </h3>
            <p className="reloop2-body">
              How the mobile app connects to Supabase and external services.
            </p>
            <img
              className="reloop2-img"
              src={imgBigPicture}
              alt="ReLoop system context: mobile app, Supabase, and external services"
            />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop2-h3" style={{ fontSize: "2rem" }}>
              The Impact
            </h3>
            <p className="reloop2-impact-note">
              These numbers are validated market research for the Vientiane
              launch - not live product metrics yet. They define what success
              looks like once the marketplace reaches density.
            </p>
            <img
              className="reloop2-img"
              src={imgAnalysis}
              alt="ReLoop market analysis and Vientiane launch model"
            />

            <h4 className="reloop2-h4">Market opportunity (validated, not yet live)</h4>
            <div className="reloop2-table-wrap">
              <table className="reloop2-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mapped restaurants (Vientiane)</td>
                    <td>817</td>
                  </tr>
                  <tr>
                    <td>Mapped cafés (Vientiane)</td>
                    <td>313</td>
                  </tr>
                  <tr>
                    <td>Planning merchant universe</td>
                    <td>1,100–1,500+</td>
                  </tr>
                  <tr>
                    <td>Annual food-service waste (proxy)</td>
                    <td>29,000–31,000 tonnes</td>
                  </tr>
                  <tr>
                    <td>Internet users (Laos)</td>
                    <td>4.97 million</td>
                  </tr>
                  <tr>
                    <td>90-day merchant target</td>
                    <td>100 active merchants</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="reloop2-h4">
              Rescueable inventory potential (city-wide, daily)
            </h4>
            <div className="reloop2-table-wrap">
              <table className="reloop2-table">
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Per outlet</th>
                    <th>City total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Conservative</td>
                    <td>4–8 bags</td>
                    <td>4,500–9,000 bags</td>
                  </tr>
                  <tr>
                    <td>Base case</td>
                    <td>10–16 bags</td>
                    <td>11,000–18,000 bags</td>
                  </tr>
                  <tr>
                    <td>Aggressive</td>
                    <td>20–30 bags</td>
                    <td>22,000–34,000 bags</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="reloop2-h4">What the build delivers today</h4>
            <ul className="reloop2-list">
              <li>
                <b>End-to-end vendor listing flow</b> - create, edit, photo
                upload, validation, and dashboard rendering
              </li>
              <li>
                <b>Schema ready for orders and payments</b> - listings, orders,
                payment events, and RLS policies documented and migrated
              </li>
              <li>
                <b>Safe change process</b> - migrations with backfill, shared
                type sync, and written standards for future schema work
              </li>
              <li>
                <b>Pickup-first architecture</b> - no delivery complexity baked
                in; we can add it after density proves out
              </li>
            </ul>

            <h4 className="reloop2-h4">What we are tracking next</h4>
            <p className="reloop2-body">
              Once merchants go live, we will measure the metrics that matter for
              investor and product proof:
            </p>
            <ul className="reloop2-list">
              <li>Active merchants and bags listed per merchant per day</li>
              <li>Sell-through rate (listed vs. sold)</li>
              <li>Repeat purchase rate</li>
              <li>Refund and cancellation rate</li>
            </ul>
            <p className="reloop2-body">
              The technical foundation is built to support those numbers. The
              next phase is density - getting the first 100 merchants listing
              daily surplus and proving the base-case rescue volume is reachable.
            </p>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop2-h3" style={{ fontSize: "2rem" }}>
              Key Technical Decisions
            </h3>
            <div className="reloop2-table-wrap">
              <table className="reloop2-table">
                <thead>
                  <tr>
                    <th>Decision</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Supabase over self-hosted backend</td>
                    <td>
                      Faster to ship, RLS built in, no server ops for a lean team
                    </td>
                  </tr>
                  <tr>
                    <td>One mobile app, two portals</td>
                    <td>Half the deploy cost; shared auth and shared types</td>
                  </tr>
                  <tr>
                    <td>Centralized validation module</td>
                    <td>
                      One source of truth for create/edit rules; UI stays thin
                    </td>
                  </tr>
                  <tr>
                    <td>Category as constrained string</td>
                    <td>
                      Simple for v1; avoids extra joins until categories need
                      metadata
                    </td>
                  </tr>
                  <tr>
                    <td>Pickup-first, no delivery v1</td>
                    <td>
                      Controls cost until marketplace density justifies logistics
                    </td>
                  </tr>
                  <tr>
                    <td>Webhook-only payment confirmation</td>
                    <td>
                      Prevents fake &quot;paid&quot; states from client-side
                      redirects
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop2-h3" style={{ fontSize: "2rem" }}>
              What&apos;s Next
            </h3>
            <ul className="reloop2-list">
              <li>
                Onboard first merchant cohort and measure sell-through against
                the base-case projections
              </li>
              <li>
                Add inventory reservation via a Postgres RPC to prevent
                overselling the last bag
              </li>
              <li>
                Expand from cover photo to multi-photo listings using the
                existing <code>listing_images</code> schema
              </li>
              <li>
                Harden observability with structured error codes and production
                logging
              </li>
            </ul>
            <p className="reloop2-tagline">ReLoop - Save More. Waste Less.</p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
