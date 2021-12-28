import React, { Fragment } from "react";
import Image from "next/image";
import Link from 'next/link'
import profilePic from "../public/profile.png";
export const Header = () => {
  return (
    <Fragment>
      <header className="header text-center">
        <h1 className="blog-name pt-lg-4 mb-0">
          <a className="no-text-decoration" href="#!">
            {"Vinod's Blog"}
          </a>
        </h1>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
                <div className="profile-image mb-3 rounded-circle mx-auto">
              <Image
                src={profilePic}
                alt="image"
              />
                </div>

              <div className="bio mb-3">
                Hi, my name is Anthony Doe. Briefly introduce yourself here. You
                can also provide a link to the about page.
                <br />
                <Link href="about"><a>Find out more about me</a></Link>
              </div>
              <ul className="social-list list-inline py-3 mx-auto">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin-in fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-github-alt fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-stack-overflow fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-codepen fa-fw" />
                  </a>
                </li>
              </ul>
              <hr />
            </div>
            <ul className="navbar-nav flex-column text-start">
              <li className="nav-item">
              <Link href="/">
              <a className="nav-link link-light active">
                <i className="fas fa-home fa-fw me-2" />
                  Home</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="about">
                <a className="nav-link link-light">
                  <i className="fas fa-user fa-fw me-2" />
                  About Me</a>
                </Link>
              </li>
            </ul>
            <div className="my-2 my-md-3">
              <a className="btn btn-primary" href="#!" target="_blank">
                Get in Touch
              </a>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};
