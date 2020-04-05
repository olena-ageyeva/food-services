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
    defaultMessage: 'Meet Natalia',
  },
  loginMessage: {
    id: `${scope}.login.message`,
    defaultMessage: 'Log in / Sign up',
  },
  introMessage: {
    id: `${scope}.intro.message`,
    defaultMessage:
      'Вкусная домашняя еда с доставкой на дом,русская ,израильская кухня,домашний творог,супы,мясные блюда,свежий хлеб,выпечка и многое другое,а также fresh eggs,кому интересно пишите',
  },
});
