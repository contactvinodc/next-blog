import React, { Fragment } from "react";
import NextLink from 'next/link'
export const Footer = () => {
  return (
    <Fragment>
        <footer className="footer text-center py-2 theme-bg-dark">
          <small className="copyright">
            <NextLink href="https://themes.3rdwavemedia.com">
              <a>Designed with <i className="fas fa-heart" style={{color: "#fb866a"}}></i> Xiaoying
              Riley for developers</a>
            </NextLink>
          </small>
        </footer>
    </Fragment>
  );
};
