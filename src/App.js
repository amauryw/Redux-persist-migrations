import React, { Component } from "react";
import styled from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store";
import { Provider } from "react-redux";
import Result from "./components/Result.container";
import Button from "./components/Button.container";
import Input from "./components/Input.container";

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

const Spacer = styled.div`
  width: 48px;
  height: 48px;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Wrapper>
            <LineWrapper>
              <Input />
              <Spacer />
              <Button />
            </LineWrapper>
            <Spacer />
            <Result />
          </Wrapper>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
