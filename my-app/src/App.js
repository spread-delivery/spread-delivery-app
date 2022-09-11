import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Welcome name="Marcos Zorzi" />
        </div>
        <div>
          <Button onClick={clickMe}>Button</Button>
        </div>
      </header>
    </div>
  );
}

function Welcome(props) {
  return <h1>Hey {props.name}, to continue click on the button bellow</h1>;
}

export default App;

function clickMe() {
  alert("You clicked me!");
}

const theme = {
  blue: {
    default: "#00FFFF",
    hover: "#283593"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: black;
  padding: 10px 30px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};