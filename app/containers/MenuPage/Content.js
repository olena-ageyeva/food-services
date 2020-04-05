import styled from 'styled-components';

const Content = styled.div`
  font-family: Georgia, Times, 'Times New Roman', serif;
  padding-left: 1.75em;

  .group_icon {
    width: 5em;
  }

  .card {
    width: 14em;
    border: 1px solid lightblue;
    text-align: center;
    margin: 5px;
    border-radius: 10px;
    display: inline-block;
  }

  .description {
    min-height: 3em;
  }

  #card_container {
    text-align: center;
  }
`;

export default Content;
