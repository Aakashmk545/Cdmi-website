
import { FaQuoteLeft, } from "react-icons/fa";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Student(props) {
    return (
        <>
           

            <OwlCarousel className='owl-theme' loop margin={10} items={1} dots={false} nav>


                {
                    props.student.map((ele) => {
                        return (
                            <div class='item padding'>
                                <div className="test">
                                    <FaQuoteLeft className='quote' />
                                    <p className="content" >
                                        {ele.prg}
                                    </p>
                                    <div className="desc d-flex">
                                        <div className="img">
                                            <img src={ele.img} alt="" />
                                        </div>
                                        <div className="user">
                                            <h6>{ele.name}</h6>
                                            <span className='default'>{ele.course}</span>
                                            <span className='muted'>@ Patoliya Infotech</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
        </>
    )
}
export default Student;