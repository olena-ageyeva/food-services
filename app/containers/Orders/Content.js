import styled from 'styled-components';

const Content = styled.label`
  font-family: Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  #content {
    padding-left: 1.75em;
    display: inline-flex;
    justify-content: center;
    width: 100%;
  }

  img {
    width: auto;
    border-radius: 50%;
    height: 10em;
  }

  a {
    text-align: center;
  }

  button {
    overflow: visible;
    text-transform: none;
    width: 15em;
    margin: 20px;
  }

  .form_button {
    width: 15em;
  }

  form {
    margin: 20px;
  }

  input {
    margin: 10px auto;
  }
`;

export default Content;
