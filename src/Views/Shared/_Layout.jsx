import React, { Component } from 'react'
import Home from '../Home/Home.jsx'
import About from '../About/About.jsx'
import Portfolio from '../Portfolio/Portfolio.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

export default class _Layout extends Component {
    constructor() {
        super()
        this.state = {
            homeActive: false,
            aboutActive: false,
            portfolioActive: false
        }
    }
    changeActiveTab = (tabName) => {
        if (tabName == 'portfolio') {
            this.setState({
                homeActive: false,
                aboutActive: false,
                portfolioActive: true
            })
        } else if (tabName == 'about') {
            this.setState({
                homeActive: false,
                aboutActive: true,
                portfolioActive: false
            })
        } else if (tabName == 'home') {
            this.setState({
                homeActive: true,
                aboutActive: false,
                portfolioActive: false
            })
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <div id="switcher" class="">
                        <div class="content-switcher">
                            <h4>STYLE SWITCHER</h4>
                            <ul>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('purple');" title="purple" class="color"><img src="Slim-content/img/styleswitcher/purple.png" alt="purple" /></a>
                                </li>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('red');" title="red" class="color"><img src="Slim-content/img/styleswitcher/red.png" alt="red" /></a>
                                </li>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('blueviolet');" title="blueviolet" class="color"><img src="Slim-content/img/styleswitcher/blueviolet.png" alt="blueviolet" /></a>
                                </li>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('blue');" title="blue" class="color"><img src="Slim-content/img/styleswitcher/blue.png" alt="blue" /></a>
                                </li>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('goldenrod');" title="goldenrod" class="color"><img src="Slim-content/img/styleswitcher/goldenrod.png" alt="goldenrod" /></a>
                                </li>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('magenta');" title="magenta" class="color"><img src="Slim-content/img/styleswitcher/magenta.png" alt="magenta" /></a>
                                </li>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('yellowgreen');" title="yellowgreen" class="color"><img src="Slim-content/img/styleswitcher/yellowgreen.png" alt="yellowgreen" /></a>
                                </li>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('orange');" title="orange" class="color"><img src="Slim-content/img/styleswitcher/orange.png" alt="orange" /></a>
                                </li>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('green');" title="green" class="color"><img src="Slim-content/img/styleswitcher/green.png" alt="green" /></a>
                                </li>
                                <li>
                                    <a href="#" onclick="setActiveStyleSheet('yellow');" title="yellow" class="color"><img src="Slim-content/img/styleswitcher/yellow.png" alt="yellow" /></a>
                                </li>
                            </ul>
                            <div id="hideSwitcher">&times;</div>
                        </div>
                    </div>
                    {/* <div id="showSwitcher" class="styleSecondColor"><i class="fa fa-cog fa-spin"></i></div> */}
                    <header class="header" id="navbar-collapse-toggle">
                        <ul class="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
                            <li className={this.state.homeActive ? "icon-box active" : "icon-box "}>
                                <i class="fa fa-home"></i>
                                <Link onClick={() => { window.location = window.location.origin + '/' }}>
                                    <h2>Home</h2>
                                </Link>
                            </li>
                            <li className={this.state.aboutActive ? "icon-box active" : "icon-box "}>
                                <i class="fa fa-user"></i>
                                <Link onClick={() => { window.location = window.location.origin + '/about' }}>
                                    <h2>About</h2>
                                </Link>
                            </li>
                            <li className={this.state.portfolioActive ? "icon-box active" : "icon-box "}>
                                <i class="fa fa-briefcase"></i>
                                <Link onClick={() => { window.location = window.location.origin + '/portfolio' }}>
                                    <h2>Portfolio</h2>
                                </Link>
                            </li>
                        </ul>

                        <nav role="navigation" class="d-block d-lg-none">
                            <div id="menuToggle">
                                <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul class="list-unstyled" id="menu">
                                    <li className={this.state.homeActive ? "active" : ""}><a onClick={() => { window.location = window.location.origin + '/' }} href="#"><i class="fa fa-home"></i><span>Home</span></a></li>
                                    <li className={this.state.aboutActive ? "active" : ""}><a onClick={() => { window.location = window.location.origin + '/about' }} href="#"><i class="fa fa-user"></i><span>About</span></a></li>
                                    <li className={this.state.portfolioActive ? "active" : ""}><a onClick={() => { window.location = window.location.origin + '/portfolio' }} href="#"><i class="fa fa-folder-open"></i><span>Portfolio</span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route path="/about">
                            <About changeActiveTab={this.changeActiveTab}/>
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio changeActiveTab={this.changeActiveTab}/>
                        </Route>
                        <Route path="/">
                            <Home changeActiveTab={this.changeActiveTab}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}