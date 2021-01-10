import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            description: "I firlmy feel associated with being a miniaturist, i have discoverd that my interests moves from numerous different disciplines and mediums. Currently i'm exploring different techniques and surfaces.",
            name: "mahnoor gul",
            largeImage: "https://res.cloudinary.com/gulmahnoor/image/upload/v1610213659/WhatsApp_Image_2021-01-06_at_7.20.27_PM_aaq1kf.jpg",
            smallImage:"https://res.cloudinary.com/gulmahnoor/image/upload/v1610215102/small-pic-mahnoorgul_w7pjla.png",
        }
    }
    componentDidMount() {
        console.log(window.location.href)
        console.log(window.location.origin)
        this.props.changeActiveTab('home')
    }
    render() {
        return (
            <div class="home">
                <section class="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
                    <div class="color-block d-none d-lg-block"></div>
                    <div class="row home-details-container align-items-center">
                        <div class="col-lg-4 bg position-fixed d-none d-lg-block large-image" style={{backgroundImage:`url(${this.state.largeImage})`}}></div>
                        <div class="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                            <div>
                                <img src={this.state.smallImage} class="img-fluid main-img-mobile d-none d-sm-block d-lg-none" alt="my picture" />
                                <h6 class="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">hi there !</h6>
                                <h1 class="text-uppercase poppins-font"><span>I'm</span> {this.state.name}</h1>
                                <p class="open-sans-font">{this.state.description}</p>
                                <a onClick={() => { window.location = window.location.origin + '/about' }} href="#" class="btn btn-about">more about me</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}