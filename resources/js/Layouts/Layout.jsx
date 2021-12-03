import React, { Fragment } from "react";
import { withResizeDetector } from "react-resize-detector";

import PartialLayout from "./nav/index";
import Footer from "./Footer";

const Layout = ({ width, children }) => {
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    let pagePath = path.split("-").includes("page");

    console.log("this is the page width" + width);
    const body = document.querySelector("body");
    body.setAttribute("data-typography", "poppins");
    body.setAttribute("data-theme-version", "light");
    body.setAttribute("data-layout", "vertical");
    body.setAttribute("data-nav-headerbg", "color_1");
    body.setAttribute("data-headerbg", "color_1");
    body.setAttribute("data-sidebar-style", "full");
    body.setAttribute("data-sibebarbg", "color_1");
    body.setAttribute("data-primary", "color_1");
    body.setAttribute("data-sidebar-position", "fixed");
    body.setAttribute("data-header-position", "fixed");
    body.setAttribute("data-container", "wide");
    body.setAttribute("direction", "ltr");

    width >= 768 && width < 1300
        ? body.setAttribute("data-sidebar-style", "mini")
        : width <= 768
        ? body.setAttribute("data-sidebar-style", "overlay")
        : body.setAttribute("data-sidebar-style", "full");
    return (
        <Fragment>
            <div
                id={`${!pagePath ? "main-wrapper" : ""}`}
                className={`${!pagePath ? "show" : "mh100vh"} ${
                    !path ? "right-profile" : ""
                }`}
            >
                <PartialLayout />
                <div className={`${!pagePath ? "content-body" : ""}`}>
                    <div
                        className={`${!pagePath ? "container-fluid" : ""} p-2`}
                        style={{ minHeight: window.screen.height - 60 }}
                    >
                        {children}
                    </div>
                </div>
                <Footer/>
            </div>
        </Fragment>
    );
};

export default withResizeDetector(Layout);
