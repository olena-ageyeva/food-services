import styled from 'styled-components';

const Section = styled.section`
  margin: 3em auto;
  text-align: center;

  &:first-child {
    margin-top: 0;
  }

  #food_list {
    display: block;
  }

  .dish_groups {
    display: inline-block;
    margin: 5px 10px;
  }

  p {
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
  }

  img {
    width: 8em;
    border-radius: 50%;
  }
`;

export default Section;
