import React from "react";
import "./style.css";

const renderList = (toc, opts = {}) => (
  <ul
    className="page-toc-list"
    ref={opts.scrollRef || null}
    onScroll={opts.onScroll}
    onPointerDown={
      opts.draggable
        ? (e) => {
            if (e.pointerType === "mouse") toc.onDragStart(e.clientX);
          }
        : undefined
    }
    onPointerMove={
      opts.draggable
        ? (e) => {
            if (e.pointerType === "mouse") toc.onDragMove(e.clientX);
          }
        : undefined
    }
    onPointerUp={opts.draggable ? toc.onDragEnd : undefined}
    onPointerLeave={opts.draggable ? toc.onDragEnd : undefined}
    onPointerCancel={opts.draggable ? toc.onDragEnd : undefined}
  >
    {toc.items.map((item) => (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          className={
            toc.activeId === item.id
              ? "page-toc-link is-active"
              : "page-toc-link"
          }
          onClick={(event) => toc.handleTocClick(event, item.id)}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

export const PageTocMobile = ({ toc }) => (
  <nav className="page-toc-mobile" aria-label="On this page">
    <p className="page-toc-title">On this page</p>
    <div className="page-toc-mobile-track">
      <button
        type="button"
        className={`page-toc-arrow page-toc-arrow-left${
          toc.canScrollLeft ? " is-visible" : ""
        }`}
        aria-label="Scroll table of contents left"
        tabIndex={toc.canScrollLeft ? 0 : -1}
        onClick={() => toc.scrollMobileToc(-1)}
      >
        ‹
      </button>
      {renderList(toc, {
        scrollRef: toc.mobileTocRef,
        draggable: true,
        onScroll: toc.updateMobileScrollHints,
      })}
      <button
        type="button"
        className={`page-toc-arrow page-toc-arrow-right${
          toc.canScrollRight ? " is-visible" : ""
        }`}
        aria-label="Scroll table of contents right"
        tabIndex={toc.canScrollRight ? 0 : -1}
        onClick={() => toc.scrollMobileToc(1)}
      >
        ›
      </button>
    </div>
  </nav>
);

export const PageTocDesktop = ({ toc }) => (
  <nav className="page-toc" aria-label="On this page">
    <p className="page-toc-title">On this page</p>
    {renderList(toc)}
  </nav>
);
