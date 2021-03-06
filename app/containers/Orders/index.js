/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import Iframe from 'react-iframe';
import messages from './messages';
import Content from './Content';
import orderImage from '../../images/order.png';
import ordersImage from '../../images/orders.jpg';

export default function OrderPage() {
  const [orderOpen, setOrderOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const user = { email: 'eageeva@hotmail.com', name: 'Olena Ageyeva' };
  console.log(submitted);

  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      {orderOpen ? (
        <Content>
          <H1>
            <FormattedMessage {...messages.orderHeader} />
          </H1>
          <div id="content">
            <Iframe
              name="hidden_iframe"
              id="hidden_iframe"
              display="none"
              position="relative"
              allowFullScreen
            />
            <form
              className="form"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBnN9lUFlc9tSKMuWIqHsSgxjnokckfw4AQvxh5OkR3hgnhQ/formResponse"
              onSubmit={() => setSubmitted(true)}
              target="hidden_iframe"
            >
              <label htmlFor="emailAddress">Email: </label>
              <input
                type="email"
                name="emailAddress"
                required
                value={user.email}
              />
              <br />

              <label htmlFor="entry.927940808">Name: </label>
              <input
                name="entry.927940808"
                type="text"
                value={user.name}
                required
              />
              <br />
              <table>
                <tr>
                  <th>Name</th>
                  <th>4 units</th>
                  <th>8 units</th>
                  <th>12 units</th>
                  <th>16 units</th>
                </tr>
                <tr>
                  <td>Борщ</td>
                  <td>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="entry.1099971039"
                      value="Soup for 1"
                    />
                  </td>
                  <td>
                    {' '}
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="entry.1099971039_sentinel"
                      value="Soup for 1"
                    />
                  </td>
                  <td>
                    {' '}
                    <input type="checkbox" id="vehicle1" value="Soup for 1" />
                  </td>
                  <td>
                    {' '}
                    <input type="checkbox" id="vehicle1" value="Soup for 1" />
                  </td>
                </tr>
                <tr>
                  <td>Щи</td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                </tr>
                <tr>
                  <td>Куриный суп с вермишелью</td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                </tr>
                <tr>
                  <td>Куриный суп с рисом</td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                  <td>
                    <input type="checkbox" id="vehicle1" />
                  </td>
                </tr>
              </table>

              <input className="form_button" type="submit" value="Send" />

              <button
                className="form_button"
                onClick={() => setOrderOpen(!orderOpen)}
                type="button"
              >
                Cancel
              </button>
            </form>
          </div>
        </Content>
      ) : (
        <Content>
          <H1>
            <FormattedMessage {...messages.orderMenuHeader} />
          </H1>
          <div id="content">
            <button onClick={() => setOrderOpen(!orderOpen)} type="button">
              <img src={orderImage} alt="order" />
              <p>Order for this week</p>
            </button>

            <button type="button">
              <img src={ordersImage} alt="orders" />
              <p>See your past orders</p>
            </button>
          </div>
        </Content>
      )}
    </div>
  );
}
