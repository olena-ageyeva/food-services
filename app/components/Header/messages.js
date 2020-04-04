/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  menu: {
    id: `${scope}.menu`,
    defaultMessage: 'Menu',
  },
  orders: {
    id: `${scope}.orders`,
    defaultMessage: 'Orders',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Log in',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
});
