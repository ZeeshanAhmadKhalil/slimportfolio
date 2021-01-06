import React, { Component } from 'react'

export default class Portfolio extends Component {
    componentDidMount(){
        this.props.changeActiveTab('portfolio')
    }
    render() {
        return (
            <div class="portfolio">
                <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                    <h1>my <span>portfolio</span></h1>
                    <span class="title-bg">works</span>
                </section>
                <section class="main-content text-center revealator-slideup revealator-once revealator-delay1">
                    <div id="grid-gallery" class="container grid-gallery">
                        <section class="grid-wrap">
                            <ul class="row grid">
                                <li>
                                    <figure>
                                        <img src="Slim-content/img/projects/project-1.jpg" alt="Portolio Image" />
                                        <div><span>Image Project</span></div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="Slim-content/img/projects/project-2.jpg" alt="Portolio Image" />
                                        <div><span>Youtube Project</span></div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="Slim-content/img/projects/project-3.jpg" alt="Portolio Image" />
                                        <div><span>Slider Project</span></div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="Slim-content/img/projects/project-4.jpg" alt="Portolio Image" />
                                        <div><span>Local Video Project</span></div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="Slim-content/img/projects/project-5.jpg" alt="Portolio Image" />
                                        <div><span>Image Project</span></div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="Slim-content/img/projects/project-6.jpg" alt="Portolio Image" />
                                        <div><span>Image Project</span></div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="Slim-content/img/projects/project-7.jpg" alt="Portolio Image" />
                                        <div><span>Image Project</span></div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="Slim-content/img/projects/project-8.jpg" alt="Portolio Image" />
                                        <div><span>Image Project</span></div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="Slim-content/img/projects/project-9.jpg" alt="Portolio Image" />
                                        <div><span>Image Project</span></div>
                                    </figure>
                                </li>
                            </ul>
                        </section>
                        <section class="slideshow">
                            <ul>
                                <li>
                                    <figure>
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div class="row open-sans-font">
                                                <div class="col-12 col-sm-6 mb-2">
                                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div class="col-12 col-sm-6 mb-2">
                                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div class="col-12 col-sm-6 mb-2">
                                                    <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div class="col-12 col-sm-6 mb-2">
                                                    <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        <img src="Slim-content/img/projects/project-1.jpg" alt="Portolio Image" />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <figcaption>
                                            <h3>Youtube Project</h3>
                                            <div class="row open-sans-font">
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Video</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">Videohive</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">Adobe After Effects</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">www.videohive.net</a></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        <div class="videocontainer">
                                            <iframe class="youtube-video" src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" allowfullscreen></iframe>
                                        </div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <figcaption>
                                            <h3>Slider Project</h3>
                                            <div class="row open-sans-font">
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">Themeforest</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">www.themeforest.net</a></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        <div id="slider" class="carousel slide portfolio-slider" data-ride="carousel" data-interval="false">
                                            <ol class="carousel-indicators">
                                                <li data-target="#slider" data-slide-to="0" class="active"></li>
                                                <li data-target="#slider" data-slide-to="1"></li>
                                                <li data-target="#slider" data-slide-to="2"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src="Slim-content/img/projects/project-3.jpg" alt="slide 1" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="Slim-content/img/projects/project-2.jpg" alt="slide 2" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="Slim-content/img/projects/project-1.jpg" alt="slide 3" />
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <figcaption>
                                            <h3>Local Video Project</h3>
                                            <div class="row open-sans-font">
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Video</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">Videohive</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">Adobe Premium</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        <video id="video" class="responsive-video" controls poster="Slim-content/img/projects/project-1.jpg">
                                            <source src="Slim-content/img/projects/video.mp4" type="video/mp4" />
                                        </video>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div class="row open-sans-font">
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        <img src="Slim-content/img/projects/project-5.jpg" alt="Portolio Image" />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div class="row open-sans-font">
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        <img src="Slim-content/img/projects/project-6.jpg" alt="Portolio Image" />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div class="row open-sans-font">
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        <img src="Slim-content/img/projects/project-7.jpg" alt="Portolio Image" />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div class="row open-sans-font">
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        <img src="Slim-content/img/projects/project-8.jpg" alt="Portolio Image" />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div class="row open-sans-font">
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div class="col-6 mb-2">
                                                    <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        <img src="Slim-content/img/projects/project-9.jpg" alt="Portolio Image" />
                                    </figure>
                                </li>
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
        )
    }
}