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
            miniatureActive: false,
            drawingActive: false,
            works: [
                {
                    categoryName: "Miniature Painting",
                    paintings: [
                        {
                            paintingName: "Untitled",
                            size: "4x5",
                            technique: "gadrang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213695/WhatsApp_Image_2021-01-09_at_12.08.26_PM_ivcdkx.jpg",
                        },
                        {
                            paintingName: "The ship",
                            size: "4x5",
                            technique: "3D miniature",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213694/WhatsApp_Image_2021-01-09_at_12.09.52_PM_gv2nxw.jpg",
                        },
                        {
                            paintingName: "Colorism in asia",
                            size: "7x5",
                            technique: "orgami",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213692/WhatsApp_Image_2021-01-09_at_12.23.51_PM_xb4ts8.jpg",
                        },
                        {
                            paintingName: "Survivors",
                            size: "5.5x7.5",
                            technique: "gadrang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213692/WhatsApp_Image_2021-01-09_at_12.23.52_PM_wpu76o.jpg",
                        },
                        {
                            paintingName: "Persian beauty",
                            size: "4x5",
                            technique: "gadrang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213688/WhatsApp_Image_2021-01-09_at_12.23.53_PM_n7ho2z.jpg",
                        },
                        {
                            paintingName: "Untitled",
                            size: "4x5",
                            technique: "gadrang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213696/WhatsApp_Image_2021-01-09_at_12.23.54_PM_qulfpa.jpg",
                        },
                        {
                            paintingName: "Seeta",
                            size: "4x5",
                            technique: "gadrang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213686/WhatsApp_Image_2021-01-09_at_12.23.54_PM_1_di9j58.jpg",
                        },
                        {
                            paintingName: "Untitled",
                            size: "4x5",
                            technique: "3D miniature",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213686/WhatsApp_Image_2021-01-09_at_12.23.55_PM_wokmgo.jpg",
                        },
                        {
                            paintingName: "Happiness with wine",
                            size: "8x5",
                            technique: "3D miniature",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213686/WhatsApp_Image_2021-01-09_at_12.23.56_PM_qusaxw.jpg",
                        },
                        {
                            paintingName: "Music",
                            size: "4x5",
                            technique: "gadrang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213690/WhatsApp_Image_2021-01-09_at_12.23.57_PM_b9b0fh.jpg",
                        },
                        {
                            paintingName: "Educate your daughter",
                            size: "7x5",
                            technique: "neem rang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213681/WhatsApp_Image_2021-01-09_at_12.23.58_PM_wuzhq5.jpg",
                        },
                        {
                            paintingName: "The persian music",
                            size: "7x5",
                            technique: "neem rang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213680/WhatsApp_Image_2021-01-09_at_12.23.59_PM_eilben.jpg",
                        },
                        {
                            paintingName: "Dreams",
                            size: "5x7",
                            technique: "gadrang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213679/WhatsApp_Image_2021-01-09_at_12.23.59_PM_1_rawdv0.jpg",
                        },
                        {
                            paintingName: "Tughra",
                            size: "4x5",
                            technique: "gadrang",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213677/WhatsApp_Image_2021-01-09_at_12.24.00_PM_u9oscm.jpg",
                        },
                    ]
                },
                {
                    categoryName: "Drawing",
                    paintings: [
                        {
                            paintingName: "The smile",
                            size: "4x5",
                            technique: "Medium charcoal on warercolor sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213678/WhatsApp_Image_2021-01-09_at_12.47.42_PM_w2y1kv.jpg",
                        },
                        {
                            paintingName: "Faded face",
                            size: "4x5",
                            technique: "Medium graphite on watercolor sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213690/WhatsApp_Image_2021-01-09_at_12.48.21_PM_tcbjb1.jpg",
                        },
                        {
                            paintingName: "Memories",
                            size: "4x5",
                            technique: "Medium pointer on scholar sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213684/WhatsApp_Image_2021-01-09_at_12.49.06_PM_lpteyq.jpg",
                        },
                        {
                            paintingName: "untitled",
                            size: "4x5",
                            technique: "Medium charcoal on watercolor sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213675/WhatsApp_Image_2021-01-09_at_12.49.58_PM_gmjhbj.jpg",
                        },
                        {
                            paintingName: "Untitled",
                            size: "4x5",
                            technique: "Medium graphite on scholar sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213674/WhatsApp_Image_2021-01-09_at_12.51.46_PM_vm7em2.jpg",
                        },
                        {
                            paintingName: "Self Potrait",
                            size: "4x5",
                            technique: "Medium soft pastels on pastel sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213675/WhatsApp_Image_2021-01-09_at_12.52.23_PM_g0kwke.jpg",
                        },
                        {
                            paintingName: "Self potrait",
                            size: "4x5",
                            technique: "Medium graphite on wasli",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213662/WhatsApp_Image_2021-01-09_at_1.42.38_PM_ocsfrh.jpg",
                        },
                        {
                            paintingName: "Drapery",
                            size: "4x5",
                            technique: "Medium charcoal on pastle sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213670/WhatsApp_Image_2021-01-09_at_1.43.28_PM_epe0tu.jpg",
                        },
                        {
                            paintingName: "Untitled",
                            size: "4x5",
                            technique: "Medium charcoal on watercolor sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213659/WhatsApp_Image_2021-01-09_at_1.43.47_PM_nts9qf.jpg",
                        },
                        {
                            paintingName: "Potraits",
                            size: "4x5",
                            technique: "Medium soft pastels on pastel sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213660/WhatsApp_Image_2021-01-09_at_1.44.03_PM_jv7e7o.jpg",
                        },
                        {
                            paintingName: "Figure study",
                            size: "5x4",
                            technique: "Medium neon pastels on scholar sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213659/WhatsApp_Image_2021-01-09_at_1.44.26_PM_pes4mf.jpg",
                        },
                        {
                            paintingName: "Skeleton",
                            size: "4x5",
                            technique: "Medium pointer on scholarsheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213659/WhatsApp_Image_2021-01-09_at_1.44.42_PM_s8jqbd.jpg",
                        },
                        {
                            paintingName: "Untiled",
                            size: "4x5",
                            technique: "Medium indian ink on scholar sheet",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213658/WhatsApp_Image_2021-01-09_at_1.44.49_PM_ak7zhu.jpg",
                        },
                    ]
                },
                {
                    categoryName: "Print Making",
                    paintings: [
                        {
                            paintingName: "Journey to death",
                            size: "A4",
                            technique: "Technique zinc etching",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213678/WhatsApp_Image_2021-01-09_at_12.54.11_PM_f4yxu3.jpg",
                        },
                        {
                            paintingName: "Rituals",
                            size: "A3",
                            technique: "Technique zinc etching",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213669/WhatsApp_Image_2021-01-09_at_12.54.56_PM_kncrom.jpg",
                        },
                        {
                            paintingName: "Mother",
                            size: "A4",
                            technique: "Technique reduction method",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213669/WhatsApp_Image_2021-01-09_at_12.55.31_PM_nmzp1l.jpg",
                        },
                        {
                            paintingName: "Old still life",
                            size: "A4",
                            technique: "Technique drypoint",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213675/WhatsApp_Image_2021-01-09_at_12.58.59_PM_e66ek0.jpg",
                        },
                        {
                            paintingName: "After death",
                            size: "A4",
                            technique: "Technique cut paste on cardboard",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213663/WhatsApp_Image_2021-01-09_at_1.00.38_PM_gy5fao.jpg",
                        },
                    ]
                },
                {
                    categoryName: "Oil Painting",
                    paintings: [
                        {
                            paintingName: "The paper",
                            size: "5x4",
                            technique: "Medium oil on canvas",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213664/WhatsApp_Image_2021-01-09_at_1.02.04_PM_rmj8sh.jpg",
                        },
                        {
                            paintingName: "Beauty",
                            size: "2x2",
                            technique: "Medium oil on canvas",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610289110/WhatsApp_Image_2021-01-09_at_1.02.44_PM_ieuedz.jpg",
                        },
                        {
                            paintingName: "Self potrait",
                            size: "2x3",
                            technique: "Medium oil on canvas",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213669/WhatsApp_Image_2021-01-09_at_1.03.33_PM_lb1cmp.jpg",
                        },
                        {
                            paintingName: "Scary night",
                            size: "2x2",
                            technique: "Medium oil on canvas",
                            image: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213672/WhatsApp_Image_2021-01-09_at_1.04.14_PM_aahcoh.jpg",
                        },
                    ]
                },
            ]
        }
    }
    changeActiveTab = (tabName) => {
        if (tabName == 'miniature') {
            this.setState({
                homeActive: false,
                aboutActive: false,
                miniatureActive: true,
                drawingActive: false,
            })
        } else if (tabName == 'about') {
            this.setState({
                homeActive: false,
                aboutActive: true,
                miniatureActive: false,
                drawingActive: false,
            })
        } else if (tabName == 'home') {
            this.setState({
                homeActive: true,
                aboutActive: false,
                miniatureActive: false,
                drawingActive: false,
            })
        } else if (tabName == 'drawing') {
            this.setState({
                homeActive: false,
                aboutActive: false,
                miniatureActive: false,
                drawingActive: true,
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
                    <header class="header sideHeader" id="navbar-collapse-toggle">
                        <ul class="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
                            <li className={window.location.href==window.location.origin+'/' ? "icon-box active" : "icon-box "}>
                                <i class="fa fa-home"></i>
                                <Link onClick={() => { window.location = window.location.origin + '/' }}>
                                    <h2>Home</h2>
                                </Link>
                            </li>
                            <li className={window.location.href.includes('about') ? "icon-box active" : "icon-box "}>
                                <i class="fa fa-user"></i>
                                <Link onClick={() => { window.location = window.location.origin + '/about' }}>
                                    <h2>About</h2>
                                </Link>
                            </li>
                            <li className={window.location.href.includes('miniature') ? "icon-box active" : "icon-box "}>
                                <i class="fa fa-search-plus"></i>
                                <Link onClick={() => { window.location = window.location.origin + '/miniature' }}>
                                    <h2>Miniature</h2>
                                </Link>
                            </li>
                            <li className={window.location.href.includes('drawing') ? "icon-box active" : "icon-box "}>
                                <i class="fa fa-pencil-square-o"></i>
                                <Link onClick={() => { window.location = window.location.origin + '/drawing' }}>
                                    <h2>Drawing</h2>
                                </Link>
                            </li>
                            <li className={window.location.href.includes('printmaking') ? "icon-box active" : "icon-box "}>
                                <i class="fa fa-print"></i>
                                <Link onClick={() => { window.location = window.location.origin + '/printmaking' }}>
                                    <h2>PrintMaking</h2>
                                </Link>
                            </li>
                            <li className={window.location.href.includes('oilpainting') ? "icon-box active" : "icon-box "}>
                                <i class="fa fa-paint-brush"></i>
                                <Link onClick={() => { window.location = window.location.origin + '/oilpainting' }}>
                                    <h2>OilPainting</h2>
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
                                    <li className={window.location.href==window.location.origin+'/' ? "active" : ""}><a onClick={() => { window.location = window.location.origin + '/' }} href="#"><i class="fa fa-home"></i><span>Home</span></a></li>
                                    <li className={window.location.href.includes('about') ? "active" : ""}><a onClick={() => { window.location = window.location.origin + '/about' }} href="#"><i class="fa fa-user"></i><span>About</span></a></li>
                                    <li className={window.location.href.includes('miniature') ? "active" : ""}><a onClick={() => { window.location = window.location.origin + '/miniature' }} href="#"><i class="fa fa-search-plus"></i><span>Miniature</span></a></li>
                                    <li className={window.location.href.includes('drawing') ? "active" : ""}><a onClick={() => { window.location = window.location.origin + '/drawing' }} href="#"><i class="fa fa-pencil-square-o"></i><span>Drawing</span></a></li>
                                    <li className={window.location.href.includes('printmaking') ? "active" : ""}><a onClick={() => { window.location = window.location.origin + '/printmaking' }} href="#"><i class="fa fa-print"></i><span>PrintMaking</span></a></li>
                                    <li className={window.location.href.includes('oilpainting') ? "active" : ""}><a onClick={() => { window.location = window.location.origin + '/oilpainting' }} href="#"><i class="fa fa-paint-brush"></i><span>OilPainting</span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route path="/about">
                            <About changeActiveTab={this.changeActiveTab} />
                        </Route>
                        <Route path="/miniature">
                            <Portfolio work={this.state.works[0]} changeActiveTab={this.changeActiveTab} />
                        </Route>
                        <Route path="/drawing">
                            <Portfolio work={this.state.works[1]} changeActiveTab={this.changeActiveTab} />
                        </Route>
                        <Route path="/printmaking">
                            <Portfolio work={this.state.works[2]} changeActiveTab={this.changeActiveTab} />
                        </Route>
                        <Route path="/oilpainting">
                            <Portfolio work={this.state.works[3]} changeActiveTab={this.changeActiveTab} />
                        </Route>
                        <Route path="/">
                            <Home changeActiveTab={this.changeActiveTab} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}