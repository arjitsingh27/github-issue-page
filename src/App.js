// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import FbissuesList from './component/FbissuesList';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import IssueLink from './component/IssueLink';

function App() {

  const [issuesList, setIssue] = useState([])



  const fbIssues = () => {
    fetch('https://api.github.com/repos/facebookincubator/create-react-app/issues')
      .then((response) => {
        return (response.json())
      })
      .then((data) => {
        console.log(data)
        return setIssue(data)
      })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={IssueLink}>
            <IssueLink fbIssues={fbIssues} />
          </Route>
          <Route path="/issues" component={FbissuesList}>
            <FbissuesList  issuesList={issuesList} />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
