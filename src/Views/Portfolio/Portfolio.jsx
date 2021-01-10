import React, { Component } from 'react'

export default class Portfolio extends Component {
    constructor() {
        super()
    }
    RenderPantingDetails = (paintings) => {
        return this.props.work.paintings.map((painting, index) => {
            const { paintingName, size, technique, image } = painting
            return (
                <li>
                    <figure>
                        <figcaption>
                            <h3>{paintingName}</h3>
                            <div class="row open-sans-font">
                                <div class="col-12 col-sm-6 mb-2">
                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Name </span>: <span class="ft-wt-600 uppercase">{paintingName}</span>
                                </div>
                                <div class="col-12 col-sm-6 mb-2">
                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Size </span>: <span class="ft-wt-600 uppercase">{size}</span>
                                </div>
                                <div class="col-12 col-sm-12 mb-2">
                                    <i class="fa fa-code pr-2"></i><span class="project-label">Technique </span>: <span class="ft-wt-600 uppercase">{technique} technique</span>
                                </div>
                            </div>
                        </figcaption>
                        <img className={'largePaintingImage'} src={image} alt="Portolio Image" />
                    </figure>
                </li>
            )
        })
    }
    RenderPantings = (paintings) => {
        return this.props.work.paintings.map((painting, index) => {
            const { paintingName, image } = painting
            return (
                <li>
                    <figure>
                        <img className={"smallPaintingImage"} src={image} alt="Portolio Image" />
                        <div><span>{paintingName}</span></div>
                    </figure>
                </li>
            )
        })
    }
    componentDidMount() {
        console.log(window.location.href)
        console.log(window.location.origin)
        this.props.changeActiveTab('miniature')
    }
    render() {
        return (
            <>
                <div class="portfolio">
                    <div>
                        <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                            <h1>The <span>{this.props.work.categoryName}</span></h1>
                            <span class="title-bg">Portfolio</span>
                        </section>
                        <section class="main-content text-center revealator-slideup revealator-once revealator-delay1">
                            <div id={"grid-gallery"} class="container grid-gallery">
                                <section class="grid-wrap">
                                    <ul class="row grid">
                                        {this.RenderPantings()}
                                    </ul>
                                </section>
                                <section class="slideshow">
                                    <ul>
                                        {this.RenderPantingDetails()}
                                    </ul>
                                    <nav>
                                        <span class="icon nav-prev"><img src="Slim-content/img/projects/navigation/left-arrow.png" alt="previous" /></span>
                                        <span class="icon nav-next"><img src="Slim-content/img/projects/navigation/right-arrow.png" alt="next" /></span>
                                        <span class="nav-close"><img src="Slim-content/img/projects/navigation/close-button.png" alt="close" /> </span>
                                    </nav>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </>
        )
    }
}