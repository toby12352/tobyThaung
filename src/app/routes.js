import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { MyWork } from "../pages/my-work";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { ReLoop } from "../pages/reloop";
import { ReLoopDeveloperPage } from "../pages/reloop_developer_page";
import { Enb } from "../pages/enb";
import { EnbDeveloperPage } from "../pages/enb-developer-page";
import { Resume } from "../pages/resume";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => {
  const prevPathRef = useRef(location.pathname);
  const pathname = location.pathname;
  const prevPath = prevPathRef.current;

  // Shallower depth = going "back" (breadcrumb / up) → reverse scroll-up transition.
  // Deeper depth = visiting a new page → normal scroll-down transition.
  const routeDepth = (path) => {
    switch (path) {
      case "/my-work":
      case "/portfolio":
        return 1;
      case "/reloop":
      case "/enb":
      case "/resume":
        return 2;
      case "/reloop_developer_page":
      case "/enb-developer-page":
        return 3;
      default:
        return 0;
    }
  };

  const isBackToHome = pathname === "/" && prevPath !== "/";

  const isBackNavigation =
    isBackToHome ||
    (routeDepth(pathname) > 0 &&
      routeDepth(prevPath) > 0 &&
      routeDepth(pathname) < routeDepth(prevPath));

  useEffect(() => {
    prevPathRef.current = pathname;
  }, [pathname]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames={isBackNavigation ? "page-reverse" : "page"}
        unmountOnExit
      >
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/portfolio" element={<MyWork />} />
          <Route path="/reloop" element={<ReLoop />} />
          <Route path="/reloop_developer_page" element={<ReLoopDeveloperPage />} />
          <Route path="/enb" element={<Enb />} />
          <Route path="/enb-developer-page" element={<EnbDeveloperPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
});

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
