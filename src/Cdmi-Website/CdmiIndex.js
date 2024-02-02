import './CdmiStyle.css';
import { FaCertificate, FaStar, FaStarHalfAlt, FaUniversity, FaHandPointRight, FaQuoteLeft, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";




import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// ...........................IMAGE FILES .....................


import about from './image/asset 29.jpeg';
import abc from './image/asset 54.jpeg';
import footer from './image/footer.svg';


// ...........................COMPONATE FILES .....................


import Header from './HeaderCdmi.js';
import Course from './CourseCdmi.js';
import Creative from './CreativeCdmi.js';
import Slider from './SliderCdmi.js';
import Slider3 from './Slider3Cdmi.js';
import Student from './StudentCdmi.js';
import Counter from './CounterCdmi.js';



// ...........................COMPONATE OBJECT .....................

const header = [
    { name: 'Home' },
    { name: 'Coures' },
    { name: 'Activities' },
    { name: 'Blog' },
    { name: 'Know Us' },
    { name: 'Get In Touch' },
    { name: 'Student Zone' },

]


const course = [

    { img: require('./image/asset 22.webp'), hed: "Development Courses", btn: "Know More..!", icon: <FaStar className='star' />, icon2: <FaStarHalfAlt className='star' /> },
    { img: require('./image/asset 14.webp'), hed: "Design Courses", btn: "Know More..!", icon: <FaStar className='star' />, icon2: <FaStarHalfAlt className='star' /> },
    { img: require('./image/asset 17.webp'), hed: "Programming IT", btn: "Know More..!", icon: <FaStar className='star' />, icon2: <FaStarHalfAlt className='star' /> },

]

const course1 = [
    { img: require('./image/asset 20.webp'), hed: "Trendy Courses", btn: "Know More..!", icon: <FaStar className='star' />, icon2: <FaStarHalfAlt className='star' /> },
    { img: require('./image/asset 25.webp'), hed: "Civil-Mech. Engineering", btn: "Know More..!", icon: <FaStar className='star' />, icon2: <FaStarHalfAlt className='star' /> },
    { img: require('./image/asset 28.webp'), hed: "Business Development", btn: "Know More..!", icon: <FaStar className='star' />, icon2: <FaStarHalfAlt className='star' /> },
]



const creative = [

    {
        icon: require('./image/read1`.png'),
        css: { backgroundColor: "#F94FA4" },
        hed: "Industry Experts As Trainers",
        prg: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis.",
    },
    {
        icon: require('./image/read2.png'),
        css: { backgroundColor: "#FFBC06" },

        hed: "Industry Experts As Trainers",
        prg: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis.",
    },
    {
        icon: require('./image/read3.png'),
        css: { backgroundColor: "#B3D369" },

        hed: "Industry Experts As Trainers",
        prg: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis.",
    },
    {
        icon: require('./image/read4.png'),
        css: { backgroundColor: "#554DA7" },

        hed: "Industry Experts As Trainers",
        prg: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis.",
    },
    {
        icon: require('./image/read5.png'),
        css: { backgroundColor: "#4382FF" },

        hed: "Industry Experts As Trainers",
        prg: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis.",
    },
    {
        icon: require('./image/read6.png'),
        css: { backgroundColor: "#F94FA4" },

        hed: "Industry Experts As Trainers",
        prg: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis.",
    },
]


const slider1 = [
    { img: require('./image/asset 1.webp') },
    { img: require('./image/asset 2.webp') },
    { img: require('./image/asset 3.webp') },
    { img: require('./image/asset 4.webp') },
    { img: require('./image/asset 5.webp') },
    { img: require('./image/asset 7.webp') },
    { img: require('./image/asset 8.webp') },
    { img: require('./image/asset 9.webp') },
]


const slider3 = [
    { img: require('./image/asset 40.png') },
    { img: require('./image/asset 41.png') },
    { img: require('./image/asset 42.png') },
    { img: require('./image/asset 43.png') },
    { img: require('./image/asset 44.png') },
    { img: require('./image/asset 45.png') },
    { img: require('./image/asset 46.png') },
    { img: require('./image/asset 47.png') },
    { img: require('./image/asset 48.png') },
]


const student = [
    {
        prg: "Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training",
        img: require('./image/asset 30.jpeg'),
        name:"KOLADIYA MANSI",
        course:'UI/UX Designer',
    },
   
    {
        prg: "Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training",
        img: require('./image/asset 31.jpeg'),
        name:"KOLADIYA RADHA",
        course:'UI/UX Designer',
    },
    {
        prg: "Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training",
        img: require('./image/asset 32.jpeg'),
        name:"MAVANI HAMESH",
        course:'WEB Designer',
    },
    {
        prg: "Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training",
        img: require('./image/asset 34.jpeg'),
        name:"RAMANI DISHAL",
        course:'FULL STACK DEVLOPER',
    },
    {
        prg: "Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training",
        img: require('./image/asset 35.jpeg'),
        name:"KOLADIYA SHUBHAM",
        course:'3D- ANIMATION',
    }
]




const counter =[
    {img:require('./image/c1.png'),number:"18000+",hed:'happy student'},
    {img:require('./image/c2.png'),number:"10+",hed:'CERTIFICATION APPROVAL'},
    {img:require('./image/c3.png'),number:"100+",hed:'CERTIFIED TEACHERS'},
    {img:require('./image/c4.png'),number:"12000+",hed:'TUDENTS PLACED'},
]


function Cdmi1() {



    return (
        <>

            {/* Top Info Section Start */}

            <div className='top_info'>
                <div className='container '>
                    <div className='top_nav  d-flex align-center'>
                        <ul className='left d-flex m-0'>
                            <li><a href=""><MdMailOutline style={{ marginRight: "5px", fontSize: "20px" }} />info@cdmi.in </a></li>
                            <li><a href=""><FaCertificate style={{ marginRight: "5px", fontSize: "20px" }} /> Verify Certificate</a></li>
                        </ul>
                        <ul className='mid m-0'>
                            <li><a href=''>HAVE ANY QUESTION ? +91 90333 16003</a></li>
                        </ul>
                        <ul className='icon d-flex m-0'>
                            <li><a href=""><FaFacebookF /></a></li>
                            <li><a href=""><FaTwitter /></a></li>
                            <li><a href=""><TiSocialGooglePlus /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                            <li><a href=""><FaInstagram /></a></li>
                            <li><a href=""><AiOutlineYoutube /></a></li>
                            <li><a href=""><FaWhatsapp /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Top Info Section End */}

            {/* HEADER COMPONATE START */}

            <Header header={header} />

            {/* HEADER COMPONATE END */}


            {/* slider Section Start */}

            <Slider slider={slider1} />



            {/* slider Section End */}



            {/* Courese Section Start */}
            <Course course={course} course1={course1} />
            {/* Courese Section Start */}




            {/* About Us Section Start */}

            <div className="m_about space-y">
                <div className=''>
                    <div className="about">
                        <div className="heading">
                            <div className="sub_title">ABOUT US</div>
                            <h6>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h6>
                        </div>
                        <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                        <div className="btn">
                            <div className="button">Enroll Now..!</div>
                        </div>
                    </div>
                    <div className="video">
                        <div className="img">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Section End */}

            {/*  Counter Section End */}

        
            <Counter counter={counter}/>

            {/*  Counter Section End */}

            {/*  Student Section Start */}

            <div className="space-y">
                <div className="container">
                    <div className="d-flex">
                        <div className="student">
                            <div className="heading">
                                <span className='sub_title'>HAPPY STUDENTS</span>
                                <h2>ALUMNI SPEAK</h2>
                            </div>
                            <Student student={student}/>
                        </div>
                        <div className="right">
                            <div className="shape">
                                <img src={abc} alt="" width={'100%'} />
                            </div>
                            <div className="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Student Section End */}

            {/*  Creative Section start */}

            <Creative creative={creative} />
            {/*  Creative Section End */}



            {/*  partners Section Start */}

            <div className="space-y">
                <div className="container">
                    <div className="heading text-center">
                        <span className='sub_title'>STUDENT PLACEMENT</span>
                        <h2>OUR RECRUITMENT PARTNERS</h2>
                    </div>
                    <div className="row partner d-flex">

                        <Slider3 slider3={slider3} />

                    </div>
                </div>
            </div>

            {/*  partners Section End */}

            {/* Widget Section Start */}

            <div className="space-y">
                <div className="container">
                    <div className="widget">
                        <h5>Our Demanded Course -</h5>
                    </div>
                    <div className="tag ">
                        <a href="">Adobe xd design course</a>
                        <a href="">Game design training institute in surat</a>
                        <a href="">C programming language training institute in katargam</a>
                        <a href="">Advance nodejs training institute in surat</a>
                        <a href="">game design class in Mota Varachha</a>
                        <a href="">codeigniter training course</a>
                        <a href="">Graphics design training in katargam</a>
                        <a href="">Best flutter training institute</a>
                        <a href="">Graphics design training course</a>
                        <a href="">Blender 3d design course</a>
                        <a href="">Creo parametrics mechanical training course</a>
                        <a href="">computer institutes in yogichowk</a>
                        <a href="">mechanical engineering training institute in Mota Varachha</a>
                        <a href="">Maya animation training institute</a>
                        <a href="">Advance Unity 3d training institute in surat</a>
                        <a href="">PHP training institute in varachha</a>
                        <a href="">Advance react js training institute in surat</a>
                        <a href="">spoken english class in adajan</a>
                        <a href="">Latest technology course</a>
                        <a href="">Civil engineering training institute in Mota Varachha</a>
                    </div>
                </div>
            </div>

            {/* Widget Section End */}

            {/* Footer Section Start */}

            <div className="space">
                <div className="footer">
                    <div className="container">
                        <div className="row1 d-flex">
                            <div className="box" style={{ width: "380px" }}>
                                <div className="logo">
                                    <a href=""><img src={footer} alt="" /></a>
                                </div>
                                <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                <h6>Follow Us On</h6>
                                <ul className='social'>
                                    <li><a href=""><FaFacebookF /></a></li>
                                    <li><a href=""><FaTwitter /></a></li>
                                    <li><a href=""><TiSocialGooglePlus /></a></li>
                                    <li><a href=""><FaLinkedin /></a></li>
                                    <li><a href=""><FaInstagram /></a></li>
                                    <li><a href=""><AiOutlineYoutube /></a></li>
                                    <li><a href=""><FaWhatsapp /></a></li>
                                </ul>
                            </div>
                            <div className="box" style={{ width: "255px" }}>
                                <h6 style={{ color: "White" }}>Feature links</h6>
                                <ul className='links'>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />About us</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Blogs</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Join Us</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Company Login</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Certificate Verification</a></li>
                                </ul>
                            </div>
                            <div className="box">
                                <h6 style={{ color: "White" }}>Contact US</h6>
                                <div className="head">
                                    <h6><a href="">HEAD OFFICE - YOGICHOWK</a></h6>
                                    <span>401-404, 4<sup>th</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</span>
                                    <div className='d-flex'>
                                        <p>Mo: </p>
                                        <a href="">+91 90333 16003</a>
                                    </div>
                                    <h6><a href=''>Other Branches</a> </h6>
                                    <ul className='branch'>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Katargam</a></li>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Mota varachha</a></li>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Adajan</a></li>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Navsari</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Section End */}
        </>
    );
}

export default Cdmi1;
