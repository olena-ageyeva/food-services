/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { withRouter } from 'react-router-dom';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { menu } from '../HomePage/menu';
import Content from './Content';

const key = 'home';

export function MenuPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const group = window.location.href.split('/').reverse()[0];
  const images = require.context('../../images', true);

  console.log('menu  items', menu[group].en.items);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Content>
        <h2>{menu[group].en.title}</h2>
        <div id="card_container">
          {menu[group].en.items.map(item => (
            <div key={`item_list_${item}`} className="card">
              <img
                className="group_icon"
                src={images(`./${group}_icon.png`)}
                alt={group}
              />
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </Content>
    </article>
  );
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  withRouter,
)(MenuPage);
