import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import useGoogleAnalytics from "../../hooks/useGoogleAnalytics ";

import imgBigPicture from "../../assets/reloop/3) Big picture diagram (containers + data flow).png";
import imgWorkflowToTables from "../../assets/reloop/6) Workflow-to-tables diagram (listing publishing).png";
import imgEditingVsCreate from "../../assets/reloop/6b) Editing vs create (smart validation + photo replacement).png";
import imgDevProcess from "../../assets/reloop/9) Development process stages (from domain  ship safely).png";

export const ReLoopDeveloperPage = () => {
  useGoogleAnalytics("G-ZVC52HVG8Q");

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> ReLoop Developer News | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4" style={{ fontSize: "3.8rem" }}>
              ReLoop Developer News
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <p className="reloop-lead">
              Engineering notes from building ReLoop&apos;s v1 marketplace as the
              sole developer: how I turned vendor listing flows into reliable
              behavior with Expo, Supabase, centralized validation, Row-Level Security(RLS),
              and the problems I hit along the way.
            </p>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop-h3" style={{ fontSize: "2rem" }}>
              System Context
            </h3>
            <img
              className="reloop-img"
              src={imgBigPicture}
              alt="ReLoop system context: mobile app, Supabase, and external services"
            />
            <ul className="reloop-list">
              <li>
                <b>Problem:</b> As a solo developer, I cannot afford two apps, a
                fragile custom backend, or payment logic that trusts the client
                when real money moves through PhaJay.
              </li>
              <li>
                <b>Action:</b> I shipped one Expo Router app with customer and
                vendor route groups, backed by Supabase (Postgres + RLS, Auth,
                Storage, Edge Functions), shared types in{" "}
                <code>packages/shared</code>, and webhook-driven payments.
              </li>
              <li>
                <b>Result:</b> Vendors publish listings and customers browse and
                reserve through one secure path - UI, database, and storage stay
                aligned instead of drifting apart.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop-h3" style={{ fontSize: "2rem" }}>
              Listing create &amp; edit reliability
            </h3>
            <ul className="reloop-list">
              <li>
                <b>Problem:</b> When validation and write logic live in screen
                components, create/edit drift - and a failed photo upload leaves
                orphaned listing rows.
              </li>
              <li>
                <b>Action:</b> I made screens orchestrate (
                <code>create-listing.tsx</code>,{" "}
                <code>edit-listing/[id].tsx</code>); put domain rules in{" "}
                <code>listing-field-validation.ts</code>; and built{" "}
                <code>createListingFromForm()</code> in <code>listing.ts</code>{" "}
                to insert the row, upload the cover, link{" "}
                <code>listing_images</code>, and delete the listing if linking
                fails. Edit locks commercial fields when open orders exist.
              </li>
              <li>
                <b>Result:</b> Vendors get predictable create/edit behavior, and
                failed uploads do not pollute the database with half-finished
                listings.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop-h3" style={{ fontSize: "2rem" }}>
              Validation &amp; domain rules
            </h3>
            <ul className="reloop-list">
              <li>
                <b>Problem:</b> Bad categories, inverted pickup windows, and
                missing covers become expensive bugs once listings go live.
              </li>
              <li>
                <b>Action:</b> I centralized every listing rule in{" "}
                <code>listing-field-validation.ts</code> - category against{" "}
                <code>LISTING_CATEGORIES</code>, price relationships, quantity{" "}
                <code>&gt;= 1</code>, pickup time format and same-day windows that
                have not already ended, plus create vs edit photo rules.
              </li>
              <li>
                <b>Result:</b> The UI can give instant feedback without drifting
                from database invariants, and create/edit differences stay
                explicit in one module.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop-h3" style={{ fontSize: "2rem" }}>
              Data architecture
            </h3>
            <img
              className="reloop-img"
              src={imgWorkflowToTables}
              alt="Workflow-to-tables mapping for listing publishing"
            />
            <img
              className="reloop-img reloop-img-tight"
              src={imgEditingVsCreate}
              alt="Create vs edit listing validation and photo replacement"
            />
            <ul className="reloop-list">
              <li>
                <b>Problem:</b> Photos parked on the partner row, or a free-form
                category field, make browse/create inconsistent and edits hard to
                trust.
              </li>
              <li>
                <b>Action:</b> I modeled <code>listings</code> as the sellable
                offer, stored photo metadata in <code>listing_images</code> with
                Storage paths, and constrained{" "}
                <code>listings.category</code> with a Postgres CHECK matching
                shared TypeScript types (
                <code>furniture</code> | <code>bakery</code> | <code>food</code>
                ). Create requires a new photo; edit may keep the existing cover.
              </li>
              <li>
                <b>Result:</b> App and database agree on category, covers stay
                linked to listings, and the schema is ready for multi-photo UX
                later via <code>sort_order</code>.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop-h3" style={{ fontSize: "2rem" }}>
              Schema evolution &amp; safety
            </h3>
            <ul className="reloop-list">
              <li>
                <b>Problem:</b> Editing production tables by hand - or adding{" "}
                <code>NOT NULL</code> before backfill - breaks live data and
                forces risky dashboard fixes.
              </li>
              <li>
                <b>Action:</b> I evolve schema only through timestamped migrations
                under <code>supabase/migrations/</code>, include RLS in the same
                change, and update shared types in the same pass. The category
                migration backfills nulls, sets a default, then enforces NOT NULL
                and CHECK.
              </li>
              <li>
                <b>Result:</b> Constraints apply after data is safe - no broken
                rows, no manual cleanup for a solo build.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop-h3" style={{ fontSize: "2rem" }}>
              AuthZ, RLS &amp; payments
            </h3>
            <ul className="reloop-list">
              <li>
                <b>Problem:</b> If the client “guesses” authorization or marks an
                order paid from a redirect URL, you risk data leaks and fake paid
                states.
              </li>
              <li>
                <b>Action:</b> I enabled RLS on all <code>public.*</code> tables
                (no policy means no access). Screens use anon keys and user JWTs
                only. <code>payment_events</code> has no client access - Edge
                Functions with <code>service_role</code> confirm PhaJay webhooks.
              </li>
              <li>
                <b>Result:</b> Customers see only active listings from approved
                partners; vendors reach their own store through{" "}
                <code>partner_members</code>; payment truth lives in the database,
                not the mobile app.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop-h3" style={{ fontSize: "2rem" }}>
              How I ship
            </h3>
            <img
              className="reloop-img"
              src={imgDevProcess}
              alt="Development process stages from domain discovery to ship safely"
            />
            <ul className="reloop-list">
              <li>
                <b>Problem:</b> Fast shipping fails when domain decisions never
                land in concrete artifacts - screens, migrations, and docs drift.
              </li>
              <li>
                <b>Action:</b> I follow a staged loop: discovery defines
                invariants, UI builds create/edit, data wiring links listings and
                photos, RLS is documented, then migrations and shared types ship
                together before dashboard polish.
              </li>
              <li>
                <b>Result:</b> Each release improves UX without rewriting the
                correctness story - validation, schema, and security stay one
                narrative.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop-h3" style={{ fontSize: "2rem" }}>
              Key tradeoffs I chose
            </h3>
            <ul className="reloop-list">
              <li>
                <b>Problem:</b> Every feature that adds a new table or service
                slows a solo v1 and makes the next change riskier.
              </li>
              <li>
                <b>Action:</b> I chose a constrained category string (no
                categories table), photos via <code>listing_images</code> +
                Storage, one validation module, and Supabase RLS + Edge Functions
                for privileged writes.
              </li>
              <li>
                <b>Result:</b> v1 stayed small and predictable while leaving room
                for multi-photo UX, richer categories, and harder inventory
                controls later - without a rewrite.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 reloop-h3" style={{ fontSize: "2rem" }}>
              What&apos;s next on my eng board
            </h3>
            <ul className="reloop-list">
              <li>
                <b>Problem:</b> As merchants go live, edge cases around time
                windows, storage policies, and last-bag oversell get more
                expensive.
              </li>
              <li>
                <b>Action:</b> Next up for me: unit tests for validation
                boundaries, tighter <code>listing_images</code> storage/RLS,
                inventory reservation via a Postgres RPC, multi-photo UX, and
                structured error codes from <code>listing.ts</code>.
              </li>
              <li>
                <b>Result:</b> The foundation already supports those upgrades - I
                harden the same paths instead of reinventing them.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
