/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Features',
  },
  orderMenuHeader: {
    id: `${scope}.order.menu.header`,
    defaultMessage: `Manage your past and future orders`,
  },
  orderHeader: {
    id: `${scope}.order.header`,
    defaultMessage: `Choose items to order`,
  },
});
