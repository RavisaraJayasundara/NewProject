import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import Header from '../common/Header';
export const Pages = () => {
    return (
       <>
          <Router>
            <Header></Header>
            {/*<Route path="/">
                   <Home></Home>
             </Route>*/}
          </Router>
       </>
)
}
