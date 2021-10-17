import styled from 'styled-components'
import Sidebar from './Components/Sidebar'
import HomePage from '../src/Pages/HomePage'
import AboutPage from '../src/Pages/AboutPage'
import ResumePage from '../src/Pages/ResumePage'
import PortfolioPage from '../src/Pages/PortfoliosPage'
import BlogsPage from '../src/Pages/BlogsPage'
import ContactPage from '../src/Pages/ContactPage'
import { Route, Switch } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfolioPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      
    }
  }
`;

export default App;
