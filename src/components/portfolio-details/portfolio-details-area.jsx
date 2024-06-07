import CallToAction from '@/src/forms/call-to-action';
import React from 'react';


const portfolio_content = {
    top_img: "/assets/img/portfolio/portfolio-details-bg.jpg",
    title: "Case Study Overview",

    des_1: <> CCTV stands for closed-circuit television. So how does a modern CCTV system work? The answer
    depends on the type of system involved. The systems are best defined by the types of cameras used. There
    are two common types of cameras in use today: Analog and IP-based cameras.</>,
    des_2: <>CCTV, also known as closed-circuit television, is a security monitor system that enables you to
    always keep a watchful eye around or in your business. CCTV security systems contain monitors and cameras
    that allow you to view live events, as well as recorders that archive footage for later use. A CCTV is a
    video surveillance system that is placed in security cameras to help record images and videos in a home, business
    property, &  even on the roads. The camera works by monitoring, recording video images and transmitting them
    to a monitor. A CCTV is therefore used primarily for security purposes</>,
    avata: "/assets/img/portfolio/portfolio-details.png",
    info: <>Choices to take a holiday and travelling  out inthis pandemic situation are limited. Why not take a stay action on quality.</>,
    name: "Rosalina D. William",
    job_title: "Founder",



    // over-veiw-list
    over_veiw_list: [
        {id: 1, icon: "flaticon-cctv-camera", title: "Reasonable Pricing"},
        {id: 2, icon: "flaticon-bubble-chat-1", title: "Quality Services"},
        {id: 3, icon: "flaticon-group", title: "Professional Team"},
        {id: 4, icon: "flaticon-secure", title: "24/7 Online Support"},
        {id: 5, icon: "flaticon-web-security", title: "Get Free Estimation"},
        {id: 6, icon: "flaticon-security", title: "Get In Touch"},
    ],
    overview: <>A CCTV is a video surveillance  system that is placed in security cameras to help record images and videos in
    a home, business property, & even on the roads. The camera works by monitoring, recording video images &
    transmitting them to a monitor. A CCTV is therefore used primarily for security purposes</>,

    overview_features: [
        {
            id: 1, 
            features: [
                "Mi 360° 1080p Full HD WiFi Smart Security Camera.",
                "TP-Link Tapo C100 1080p Full HD Indoor WiFi Security Camera.",
                "Yi 87001 Home Camera Wireless IP Security Surveillance System", 
            ],
        },
        {
            id: 2, 
            features: [
                "TP-Link Tapo C200 Smart Cam Pan Tilt Home WiFi Camera.",
                "You can operate CCTV cameras without the internet or data center.",
                "Qubo Smart Cam 360", 
            ],
        },
    ],

    bottom_info_title: "What is difference between CCTV and TV?",
    bottom_info: <>The difference between CCTV and standard TV is that standard TV openly broadcasts signals to the public.
    In contrast, CCTV broadcasts are not sent to the public. CCTV uses either a wired or wireless transmission
    to transmit the broadcast from the video cameras to the monitor(s) or recording device.</>,

    product_details: [
        {id: 1, info: "Category :", details: "CCTV, Security"},
        {id: 2, info: "Client :", details: "Alonso Dicosa"},
        {id: 3, info: "Date :", details: "June 21, 2022"},
        {id: 4, info: "Values :", details: "$20,000"},
    ],

    service: [
        {id:1, icon: "fas fa-cctv" , title: "Install & Configure"},
        {id:2, icon: "fas fa-video" , title: "Repair & Service"},
        {id:3, icon: "fas fa-cogs" , title: "Maintenance"},
        {id:4, icon: "fas fa-camera" , title: "Video Verification"},
        {id:5, icon: "far fa-tv" , title: "Interactive Security"}, 
    ],

    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Company Profile"},
        {id: 2, icon: "fas fa-file-image", title: "Service Details"},
        {id: 3, icon: "fas fa-file-prescription", title: "Service Technician"},
    ]

}
const {top_img, title, des_1, des_2, avata, info, name, job_title, over_veiw_list, overview, overview_features, bottom_info, bottom_info_title, product_details, service, materials} = portfolio_content


const PortfolioDetailsArea = () => {
    return (
        <>
           <div className="tp-service-details-area pt-115 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                        <div className="tp-service-overveiw-area mr-20">
                            <img className="w-100" src={top_img} alt="theme-pure" />
                            <div className="tp-overview-details">
                                <h2 className="overview-title">{title}</h2>
                                <p>{des_1}</p>
                                <p>{des_2}</p>
                                
                                <div className="overveiw-testimonial text-center">
                                    <div className="portfolio-details-content">
                                    <img src={avata} alt="theme-pure" />
                                    <p>{info}</p>
                                    <h5>{name}</h5>
                                    <h6>{job_title}</h6>
                                    </div>
                                    <div className="testi-overview-icon">
                                    <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>

                                <div className="row over-veiw-list counter-row">
                                    <h4>Working Process</h4>
                                    {over_veiw_list.map((item, i) => 
                                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="tp-over-view-item mb-30">
                                                <div className="over-veiw-counter"></div>
                                                <i className={item.icon}></i>
                                                <h5>{item.title}</h5>
                                            </div>
                                        </div>
                                    )} 
                                </div>

                                <div className="tp-overview-fea-list">
                                    <p>{overview}</p>
                                    <div className="row">
                                        {overview_features.map((item, i) => 
                                            <div key={i} className="col-xl-6">
                                                <div className="tp-overview-feature">
                                                    <ul>
                                                        {item.features?.map((feature, index)  => 
                                                            <li key={index}>
                                                                <i className="fal fa-check"></i>
                                                                 {feature}
                                                            </li>                                                        
                                                        )} 
                                                    </ul>
                                                </div>
                                            </div>
                                        )} 
                                    </div>
                                    <div className="tp-bottom-info pt-20">
                                    <h4>{bottom_info_title}</h4>
                                    <p>{bottom_info}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>

                        <div className="col-xl-3">

                        <div className="tp-sidebar-widget mb-50">
                            <div className="tp-widget-category">
                                <h4 className="tp-widget-title">Product Details</h4>
                                <ul> 
                                    {product_details.map((item, i) => 
                                        <li key={i}><a href="#"><span>{item.info}</span> {item.details}</a></li>
                                    )} 
                                </ul>
                            </div>
                        </div>

                        <div className="tp-sidebar-widget">
                            <h4 className="tp-widget-title">Our Services</h4>
                            <div className="tp-widget-item">
                                <ul>
                                  {service.map((item, i) => <li key={i}>
                                    <a href="#"><span><i className={item.icon}></i> {item.title}</span></a>
                                    </li> 
                                  )} 
                                </ul>
                            </div>
                        </div>

                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Call To Action</h4>
                            <div className="widget-form grey-bg">
                                <CallToAction /> 
                            </div>
                        </div>

                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Our Materials</h4>
                            <div className="tp-widget-item-2">
                                <ul>
                                    {materials.map((item, i)  => 
                                        <li key={i}>
                                            <a href="#"><span><i className={item.icon}></i> {item.title}</span></a>
                                        </li>
                                    )} 
                                </ul>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default PortfolioDetailsArea;