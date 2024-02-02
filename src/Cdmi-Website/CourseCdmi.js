


import {  FaStar, FaStarHalfAlt } from "react-icons/fa";


function Course(props) {
    return (
        <>
            {/* Courese Section Start */}

            <div className="space-y">
                <div className="container">
                    <div className="heading text-center">
                        <span className='sub_title'>CREATIVE COURSE</span>
                        <h2>OFFERED COURSES</h2>
                    </div>
                    <div className="row1 d-flex">
                        {
                            props.course.map((ele) => {
                                return (
                                    <div className="box1">
                                        <div className="img">
                                            <img src={ele.img} />
                                        </div>
                                        <div className="content">
                                            <h4 className='title'><a href="">{ele.hed}</a></h4>
                                        </div>
                                        <div className="bottom">
                                            <div>
                                                {ele.icon}
                                               {ele.icon}
                                               {ele.icon}
                                               {ele.icon2}
                                            </div>
                                            <div className="btn">
                                                <a href="">{ele.btn}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row1 d-flex">
                        {
                            props.course1.map((ele) => {
                                return (
                                    <div className="box1">
                                        <div className="img">
                                            <img src={ele.img} />
                                        </div>
                                        <div className="content">
                                            <h4 className='title'><a href="">{ele.hed}</a></h4>
                                        </div>
                                        <div className="bottom">
                                            <div>
                                               {ele.icon}
                                               {ele.icon}
                                               {ele.icon}
                                               {ele.icon2}
                                            </div>
                                            <div className="btn">
                                                <a href="">{ele.btn}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                   
                    <div className="row1">
                        <div className="button">View All Courses</div>
                    </div>
                </div>
            </div>

            {/* Courese Section End */}

        </>
    )
}
export default Course;