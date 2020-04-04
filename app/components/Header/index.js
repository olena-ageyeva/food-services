import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner-1.png';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.menu} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.orders} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.login} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
