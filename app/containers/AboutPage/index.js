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

import photo from '../../images/Natalia.jpg';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>About Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <Content>
        <div className="content">
          <img src={photo} alt="meet" />
        </div>
        <div className="content">
          <H1>
            <FormattedMessage {...messages.greetMessage} />
          </H1>
          <p>
            <FormattedMessage {...messages.introMessage} />
          </p>
        </div>
      </Content>
    </div>
  );
}
