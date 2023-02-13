import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

import Header from "./pages/Header";
import Main from "./pages/Main";


const GlobalStyle = createGlobalStyle`
  /* 글로벌 공통 스타일 */
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;




function App() {
  return (
    <>  
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />} >
          {/* <Route index element={<Main />} /> */}
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
