import React from 'react'
import './App.css'
// import {Button} from 'antd'
import {LayoutBox} from './pages/Layout'
import {LoginBox} from 'pages/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LayoutBox></LayoutBox>
        </Route>
        <Route path="/login">
          <LoginBox></LoginBox>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
