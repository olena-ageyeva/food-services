/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import Content from './Content';
import Form from './Form';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>

      <H1>
        <FormattedMessage {...messages.loginMessage} />
      </H1>
      <Content>
        <Form>
          <label htmlFor="name">Username:</label>
          <input type="text" name="name" placeholder="enter your username" />
          <br />

          <label htmlFor="name">Password:</label>
          <input
            type="password"
            name="name"
            placeholder="enter your username"
          />
          <br />

          <input className="form_button" type="submit" value="Login" />
          <button className="form_button" type="button">
            {' '}
            Clear{' '}
          </button>
        </Form>
      </Content>
    </div>
  );
}
