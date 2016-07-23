import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Login from './modules/Login'
import PostLogin from './modules/PostLogin'
import FirstLogin from './modules/FirstLogin'
import StudentPortal from './modules/StudentPortal'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
			<IndexRoute component={Login}/>
			<Route path="/about" component={About} />
			<Route path="/postlogin" component={PostLogin} />
			<Route path="/firstlogin" component={FirstLogin} />
			<Route path="/portal" component={StudentPortal} />
		</Route>
  </Router>
), document.getElementById('app'))