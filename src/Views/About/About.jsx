import React, { Component } from 'react'

export default class About extends Component {
    constructor() {
        super()
        this.state = {
            personalInfo: {
                firstName: "Mahnoor",
                lastName: "Gul",
                age: 22,
                email: "gulmahnoor8888@gmail.com",
                languages: ["English", "Urdu"],
                nationality: "Pakistani",
                smallImage:"https://res.cloudinary.com/gulmahnoor/image/upload/v1610215102/small-pic-mahnoorgul_w7pjla.png",
            },
            paintingsAmounts: [
                {
                    category: "Miniature",
                    amount: 14
                },
                {
                    category: "Drawing",
                    amount: 13
                },
                {
                    category: "Printmaking",
                    amount: 5
                },
                {
                    category: "OilPainting",
                    amount: 5
                },
            ],
            skills: [
                {
                    skillName: "miniature",
                    percentage: 95,
                },
                {
                    skillName: "drawing",
                    percentage: 89,
                },
                {
                    skillName: "oil painting",
                    percentage: 70,
                },
                {
                    skillName: "print making",
                    percentage: 65,
                },
            ],
            educations: [
                {
                    year: "2016",
                    degreeName: "Pre-engineering",
                    institute: "Govternment Women Degree College, Attock, Punjab, Pakistan.",
                },
                {
                    year: "2021",
                    degreeName: "Bachelors",
                    institute: "Fatima Jinnah Women University, Rawalpindi, Punjab, Pakistan.",
                },
            ],
            experiences: [
                {
                    yearSpan: "2019 - 2020",
                    type: "Comissioned Work",
                    detail: "One year of panting experence using the charcoal as a medium.",
                },
                {
                    yearSpan: "2020 - present",
                    type: "Comissioned Work",
                    detail: "Panting on the A3 size of paper using the charcoal as a medium.",
                },
            ]
        }
    }
    RenderSkills = () => {
        // console.log(this.state.skills)
        return this.state.skills.map((skill, index) => {
            console.log(skill)
            const { skillName, percentage } = skill
            return (
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                    <div className={"c100 p" + percentage}>
                        <span>{percentage}%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">{skillName}</h6>
                </div>
            )
        })
    }
    RenderExperience = () => {
        return this.state.experiences.map((experience, index) => {
            const { yearSpan, type, detail } = experience
            return (
                <li>
                    <div class="icon">
                        <i class="fa fa-briefcase"></i>
                    </div>
                    <span class="time open-sans-font text-uppercase">{yearSpan}</span>
                    <h5 class="poppins-font text-uppercase">{type}</h5>
                    <p class="open-sans-font">{detail}</p>
                </li>
            )
        })
    }
    RenderEducation = () => {
        return this.state.educations.map((education, inde) => {
            const { year, degreeName, institute } = education
            return (
                <li>
                    <div class="icon">
                        <i class="fa fa-graduation-cap"></i>
                    </div>
                    <span class="time open-sans-font text-uppercase">{year}</span>
                    <h5 class="poppins-font text-uppercase">{degreeName}</h5>
                    <p class="open-sans-font">{institute}</p>
                </li>
            )
        })
    }
    componentDidMount() {
        this.props.changeActiveTab('about')
    }
    render() {
        return (
            <div class="about">
                <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                    <h1>ABOUT <span>ME</span></h1>
                    <span class="title-bg">Resume</span>
                </section>
                <section class="main-content revealator-slideup revealator-once revealator-delay1">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-5 col-xl-6">
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                                    </div>
                                    <div class="col-12 d-block d-sm-none">
                                        <img src={this.state.personalInfo.smallImage} class="img-fluid main-img-mobile" alt="my picture" />
                                    </div>
                                    <div class="col-6">
                                        <ul class="about-list list-unstyled open-sans-font">
                                            <li> <span class="title">first name :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{this.state.personalInfo.firstName}</span> </li>
                                            <li> <span class="title">last name :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{this.state.personalInfo.lastName}</span> </li>
                                            <li> <span class="title">Age :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{this.state.personalInfo.age} Years</span> </li>
                                        </ul>
                                    </div>
                                    <div class="col-6">
                                        <ul class="about-list list-unstyled open-sans-font">
                                            <li> <span class="title">Email :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block about-email">{this.state.personalInfo.email}</span> </li>
                                            <li> <span class="title">langages :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{this.state.personalInfo.languages[0]}, {this.state.personalInfo.languages[1]}</span> </li>
                                            <li> <span class="title">Nationality :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{this.state.personalInfo.nationality}</span> </li>
                                        </ul>
                                    </div>
                                    <div class="col-12 mt-3">
                                        <a onClick={() => { window.location = window.location.origin + '/' }} href="#" class="btn btn-home">Home Page</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="box-stats with-margin">
                                            <h3 class="poppins-font position-relative">{this.state.paintingsAmounts[0].amount}</h3>
                                            <p class="open-sans-font m-0 position-relative text-uppercase">{this.state.paintingsAmounts[0].category}</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="box-stats with-margin">
                                            <h3 class="poppins-font position-relative">{this.state.paintingsAmounts[1].amount}</h3>
                                            <p class="open-sans-font m-0 position-relative text-uppercase">{this.state.paintingsAmounts[1].category}</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="box-stats">
                                            <h3 class="poppins-font position-relative">{this.state.paintingsAmounts[2].amount}</h3>
                                            <p class="open-sans-font m-0 position-relative text-uppercase">{this.state.paintingsAmounts[2].category}</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="box-stats">
                                            <h3 class="poppins-font position-relative">{this.state.paintingsAmounts[3].amount}</h3>
                                            <p class="open-sans-font m-0 position-relative text-uppercase">{this.state.paintingsAmounts[3].category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="separator" />
                        <div class="row">
                            <div class="col-12">
                                <h3 class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">My Skills</h3>
                            </div>
                            {this.RenderSkills()}
                        </div>
                        <hr class="separator mt-1" />
                        <div class="row">
                            <div class="col-12">
                                <h3 class="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&</span> Education</h3>
                            </div>
                            <div class="col-lg-6 m-15px-tb">
                                <div class="resume-box">
                                    <ul>
                                        {this.RenderExperience()}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 m-15px-tb">
                                <div class="resume-box">
                                    <ul>
                                        {this.RenderEducation()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}